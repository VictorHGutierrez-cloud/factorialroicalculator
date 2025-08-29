# Código que calcula o custo de turnover usando apenas 3 inputs: 
# - número de colaboradores (num_employees)
# - desligamentos no último ano (num_desligamentos)
# - salário médio mensal (avg_salary_monthly)
#
# O cálculo aplica exatamente (com correções aritméticas explícitas):
# - custos de horas de RH por vaga (8h28m = 8.4666667h) a R$24/h
# - entrevistas com gestores: 4h a R$47/h por vaga
# - salários e encargos: 3 meses de custo total por contratado (avg_salary_monthly * 3)
# - treinamentos: 30h * R$30/h, + orientação do gestor 8h * R$47/h, + perda de performance 20h * R$18/h
# - custo mínimo com rescisão por contratado (valor fixo informado)
#
# Gera resumo por-vaga e total, e exporta arquivo Excel com detalhe e resumo.
import pandas as pd
from decimal import Decimal, ROUND_HALF_UP

def to_money(x):
    return float(Decimal(x).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP))

def calculate_turnover_cost(num_employees, num_desligamentos, avg_salary_monthly):
    # Inputs
    n_emp = int(num_employees)
    n_desl = int(num_desligamentos)
    avg_sal = float(avg_salary_monthly)
    if n_emp <= 0:
        raise ValueError("num_employees must be > 0")
    if n_desl < 0:
        raise ValueError("num_desligamentos must be >= 0")
    if avg_sal < 0:
        raise ValueError("avg_salary_monthly must be >= 0")
    
    # Turnover %
    turnover_pct = 100.0 * n_desl / n_emp
    
    # Constants (from your briefing)
    # Tempo RH por vaga: 8h28m => 8 + 28/60 hours
    hours_rh_per_vaga = 8 + 28/60  # 8.466666666666667
    cost_rh_per_hour = 24.0  # R$ 24/h
    hours_manager_interview = 4.0  # total hours dos gestores por vaga
    cost_manager_hour = 47.0  # R$ 47/h
    # Salário e encargos: 3 meses de avg_salary_monthly (valor informado: R$5.010/mês used as example)
    months_salary_considered = 3
    # Treinamento (corrigido aritmeticamente):
    training_hours = 30.0
    training_cost_per_hour = 30.0  # R$30/h
    manager_onboard_hours = 8.0
    manager_hour_cost = cost_manager_hour  # same 47/h
    peer_productivity_loss_hours = 20.0
    peer_hour_cost = 18.0  # R$18/h
    # Rescisão (valor informado)
    rescission_per_hire = 2798.27  # R$ por contratado (média simplificada que você deu)
    
    # Per-vaga calculations
    rh_hours_total = hours_rh_per_vaga * n_desl
    rh_cost_total = rh_hours_total * cost_rh_per_hour
    rh_cost_per_vaga = hours_rh_per_vaga * cost_rh_per_hour
    
    manager_cost_per_vaga = hours_manager_interview * cost_manager_hour
    manager_cost_total = manager_cost_per_vaga * n_desl
    
    salary_cost_per_hire = avg_sal * months_salary_considered
    salary_cost_total = salary_cost_per_hire * n_desl
    
    # Training calculations (do the exact arithmetic, and show corrected numbers)
    training_cost_time = training_hours * training_cost_per_hour  # 30*30 = 900
    manager_onboard_cost = manager_onboard_hours * manager_hour_cost  # 8*47 = 376 (note: original text had 384 -> corrected)
    peer_loss_cost = peer_productivity_loss_hours * peer_hour_cost  # 20*18 = 360
    training_total_per_hire = training_cost_time + manager_onboard_cost + peer_loss_cost
    training_total_all = training_total_per_hire * n_desl
    
    rescission_total = rescission_per_hire * n_desl
    
    # Grand totals
    grand_total = (
        rh_cost_total +
        manager_cost_total +
        salary_cost_total +
        training_total_all +
        rescission_total
    )
    
    # Per-hire breakdown (rounded)
    per_hire = {
        "hours_rh_per_vaga_h": to_money(hours_rh_per_vaga),
        "rh_cost_per_vaga_R$": to_money(rh_cost_per_vaga),
        "manager_cost_per_vaga_R$": to_money(manager_cost_per_vaga),
        "salary_cost_3_months_R$": to_money(salary_cost_per_hire),
        "training_total_per_hire_R$": to_money(training_total_per_hire),
        "rescission_per_hire_R$": to_money(rescission_per_hire),
        "total_per_hire_R$": to_money(
            rh_cost_per_vaga + manager_cost_per_vaga + salary_cost_per_hire + training_total_per_hire + rescission_per_hire
        )
    }
    
    totals = {
        "num_employees": n_emp,
        "num_desligamentos": n_desl,
        "turnover_pct": to_money(turnover_pct),
        "rh_hours_total_h": to_money(rh_hours_total),
        "rh_cost_total_R$": to_money(rh_cost_total),
        "manager_cost_total_R$": to_money(manager_cost_total),
        "salary_cost_total_R$": to_money(salary_cost_total),
        "training_total_all_R$": to_money(training_total_all),
        "rescission_total_R$": to_money(rescission_total),
        "grand_total_R$": to_money(grand_total)
    }
    
    # Build dataframes for export / display
    df_per_hire = pd.DataFrame([per_hire])
    df_totals = pd.DataFrame([totals])
    
    # Detailed line items per category (useful for site UI breakdown)
    detail_rows = [
        {"Categoria": "Horas RH (total)", "Valor_R$": to_money(rh_cost_total), "Observacao": f"{to_money(rh_hours_total)} h totais (por vaga {to_money(hours_rh_per_vaga)} h)"},
        {"Categoria": "Horas Gestor (total)", "Valor_R$": to_money(manager_cost_total), "Observacao": f"{n_desl} vagas × {hours_manager_interview} h × R$ {cost_manager_hour}/h"},
        {"Categoria": "Salários e encargos (3 meses)", "Valor_R$": to_money(salary_cost_total), "Observacao": f"{n_desl} × R$ {to_money(avg_sal)} × {months_salary_considered} meses"},
        {"Categoria": "Treinamento e perdas (total)", "Valor_R$": to_money(training_total_all), "Observacao": f"{to_money(training_total_per_hire)} por contratado (treino, onboarding gestor, perda produtividade)"},
        {"Categoria": "Rescisões (total)", "Valor_R$": to_money(rescission_total), "Observacao": f"R$ {to_money(rescission_per_hire)} por contratado (média simplificada)"},
        {"Categoria": "TOTAL GERAL", "Valor_R$": to_money(grand_total), "Observacao": "Soma das linhas anteriores"}
    ]
    df_detail = pd.DataFrame(detail_rows)
    
    # Export to Excel for download/use on site if needed
    file_path = "/mnt/data/Turnover_Calc_Simple_BR.xlsx"
    with pd.ExcelWriter(file_path, engine="openpyxl") as writer:
        df_totals.to_excel(writer, sheet_name="Resumo", index=False)
        df_per_hire.to_excel(writer, sheet_name="Per_Hire", index=False)
        df_detail.to_excel(writer, sheet_name="Detalhes", index=False)
    
    return {
        "per_hire": df_per_hire,
        "totals": df_totals,
        "detail": df_detail,
        "excel_path": file_path
    }


# --- Exemplo de uso com os números que você indicou (51 vagas, etc.) ---
# Você pode substituir esses valores pela entrada do site.
example = calculate_turnover_cost(num_employees=1000, num_desligamentos=51, avg_salary_monthly=5010.00)

# Exibir resultados ao usuário (dataframes)
import caas_jupyter_tools as tools; tools.display_dataframe_to_user("Resumo - Turnover", example["totals"])
tools.display_dataframe_to_user("Per Hire - Breakdown", example["per_hire"])
tools.display_dataframe_to_user("Detalhes - Itens", example["detail"])

# Mostrar link para download do arquivo gerado
example["excel_path"]
