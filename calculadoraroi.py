# This script creates a turnover cost calculation Excel template tailored for Brazil (BR).
# It includes sheets: "Turnover_Cases", "Resumo", and "Inputs_Globais".
# The template contains formulas for common cost components and a summary dashboard.
import pandas as pd
import numpy as np

# Define columns for the Turnover_Cases sheet
columns = [
    "Employee_ID",
    "Cargo/Nível",
    "Tipo_Desligamento",  # Sem Justa Causa / Pedido / Comum Acordo / Justa Causa
    "Salario_Mensal_R$",
    "Encargos_Beneficios_%",  # e.g., 0.70
    "Saldo_FGTS_R$",
    "Multa_FGTS_%",  # 0.40 SJC, 0.20 comum acordo, 0 pedido, 0 justa causa
    "Aviso_Previo_Indenizado_Dias",
    "Dias_Vaga_(TTF)",
    "Valor_Diario_do_Posto_R$",
    "Fator_Cobertura_%",  # 0 a 1 (percentual coberto por equipe/automação)
    "Custos_Anuncios_R$",
    "Custos_Agencia_R$",
    "Bonus_Indicacao_R$",
    "Custos_Background_Assessments_R$",
    "Horas_RH_(total)",
    "Custo_Hora_RH_R$",
    "Horas_Gerente_(total)",
    "Custo_Hora_Gerente_R$",
    "Custos_Equipamentos_R$",
    "Treinamento_Horas",
    "Custo_Hora_Treinamento_R$",
    "Materiais_Treinamento_R$",
    "Ramp_up_Meses",
    "Deficit_Medio_Ramp_%",  # ex.: 0.5 = 50% abaixo do target
    "Horas_Extra_Cobertura_R$",
    "Temporarios_R$",
    "Penalidade_Qualidade_R$",
    "Outros_Custos_Rescisorios_R$"  # férias prop., 13º prop., etc. (se quiser detalhar)
]

# Create an empty DataFrame with a few sample rows for guidance
sample_rows = 5
df_cases = pd.DataFrame("", index=range(sample_rows), columns=columns)

# Add helpful placeholders in row 0
df_cases.loc[0, :] = [
    "EX-001",
    "Analista Pleno",
    "Sem Justa Causa",
    "6000",
    "0.70",
    "20000",
    "0.40",
    "33",
    "45",
    "850",
    "0.30",
    "1200",
    "0",
    "0",
    "150",
    "8",
    "80",
    "4",
    "160",
    "3500",
    "24",
    "80",
    "600",
    "3",
    "0.50",
    "1800",
    "0",
    "0",
    "3000"
]

# Build a parallel DataFrame for calculated fields and formulas
calc_cols = [
    "FGTS_Multa_R$",
    "Aviso_Previo_Indenizado_R$",
    "Custo_Tempo_Pessoas_R$",
    "Custo_Recrutamento_R$",
    "Custo_Vaga_R$",
    "Custo_Onboarding_Treinamento_R$",
    "Custo_Ramp_R$",
    "Custo_Cobertura_Extra_R$",
    "Custo_Qualidade_Outros_R$",
    "CUSTO_TOTAL_CASO_R$"
]

df_calc = pd.DataFrame(index=range(sample_rows), columns=calc_cols)

# We will add Excel formulas referencing the Turnover_Cases columns (1-indexed in Excel).
# Helper to create cell references easily
def col_idx(col_name):
    return columns.index(col_name) + 1  # Excel is 1-based

# Build formulas for each row
for r in range(sample_rows):
    row = r + 2  # header is row 1 in Excel

    # Excel cell references
    F_saldo_fgts = f"$F{row}"
    G_multa_pct = f"$G{row}"
    H_aviso_dias = f"$H{row}"
    D_salario = f"$D{row}"
    P_horas_rh = f"$P{row}"
    Q_custo_hora_rh = f"$Q{row}"
    R_horas_ger = f"$R{row}"
    S_custo_hora_ger = f"$S{row}"
    L_anuncios = f"$L{row}"
    M_agencia = f"$M{row}"
    N_bonus = f"$N{row}"
    O_bg = f"$O{row}"
    I_dias_vaga = f"$I{row}"
    J_valor_dia = f"$J{row}"
    K_cobertura = f"$K{row}"
    U_trein_h = f"$U{row}"
    V_custo_tr_h = f"$V{row}"
    W_materiais = f"$W{row}"
    T_equip = f"$T{row}"
    X_ramp_meses = f"$X{row}"
    Y_deficit = f"$Y{row}"
    Z_horas_extra = f"$Z{row}"
    AA_temp = f"$AA{row}"
    AB_qualidade = f"$AB{row}"
    AC_outros_resc = f"$AC{row}"

    # Formulas
    fgts_multa = f"={F_saldo_fgts}*{G_multa_pct}"
    aviso_prev = f"=({D_salario}/30)*{H_aviso_dias}"
    tempo_pessoas = f"=({P_horas_rh}*{Q_custo_hora_rh})+({R_horas_ger}*{S_custo_hora_ger})"
    recrutamento = f"={L_anuncios}+{M_agencia}+{N_bonus}+{O_bg}"
    cov = f"={I_dias_vaga}*{J_valor_dia}*(1-{K_cobertura})"
    onboarding = f"=({U_trein_h}*{V_custo_tr_h})+{W_materiais}+{T_equip}"
    ramp = f"=({X_ramp_meses}*30)*{J_valor_dia}*{Y_deficit}"
    cobertura_extra = f"={Z_horas_extra}+{AA_temp}"
    qualidade_outros = f"={AB_qualidade}+{AC_outros_resc}"
    total = f"=SUM({fgts_multa[1:]},{aviso_prev[1:]},{tempo_pessoas[1:]},{recrutamento[1:]},{cov[1:]},{onboarding[1:]},{ramp[1:]},{cobertura_extra[1:]},{qualidade_outros[1:]})"

    df_calc.loc[r, "FGTS_Multa_R$"] = fgts_multa
    df_calc.loc[r, "Aviso_Previo_Indenizado_R$"] = aviso_prev
    df_calc.loc[r, "Custo_Tempo_Pessoas_R$"] = tempo_pessoas
    df_calc.loc[r, "Custo_Recrutamento_R$"] = recrutamento
    df_calc.loc[r, "Custo_Vaga_R$"] = cov
    df_calc.loc[r, "Custo_Onboarding_Treinamento_R$"] = onboarding
    df_calc.loc[r, "Custo_Ramp_R$"] = ramp
    df_calc.loc[r, "Custo_Cobertura_Extra_R$"] = cobertura_extra
    df_calc.loc[r, "Custo_Qualidade_Outros_R$"] = qualidade_outros
    df_calc.loc[r, "CUSTO_TOTAL_CASO_R$"] = total

# Combine cases + calculated columns for one sheet
df_all = pd.concat([df_cases, df_calc], axis=1)

# Build Resumo sheet with Excel formulas (will compute when opened)
resumo = pd.DataFrame({
    "Metrica": [
        "Total de Casos (linhas preenchidas)",
        "Custo Total (R$)",
        "Custo Médio por Caso (R$)",
        "Salário Mensal Médio (R$)",
        "Custo Médio / Salário Médio (x)",
        "Custo Rescisório (FGTS Multa + Aviso + Outros)",
        "Custo Recrutamento (R$)",
        "Custo Tempo de Pessoas (R$)",
        "Custo Vaga (R$)",
        "Custo Onboarding/Treinamento (R$)",
        "Custo Ramp-up (R$)",
        "Cobertura Extra (R$)",
        "Qualidade/Outros (R$)"
    ],
    "Valor": [
        "=COUNTA(Turnover_Cases!B2:B1000)",
        "=SUM(Turnover_Cases!J2:J1000*0)+SUM(Turnover_Cases!AJ2:AJ1000)",  # placeholder, replaced below
        "=IFERROR(B2/B1,0)",
        "=AVERAGE(Turnover_Cases!D2:D1000)",
        "=IFERROR(B3/B4,0)",
        "=SUM(Turnover_Cases!AI2:AI1000)+SUM(Turnover_Cases!AM2:AM1000)+SUM(Turnover_Cases!AC2:AC1000)",
        "=SUM(Turnover_Cases!AF2:AF1000)",
        "=SUM(Turnover_Cases!AE2:AE1000)",
        "=SUM(Turnover_Cases!AG2:AG1000)",
        "=SUM(Turnover_Cases!AH2:AH1000)",
        "=SUM(Turnover_Cases!AI2:AI1000)",
        "=SUM(Turnover_Cases!AJ2:AJ1000)",
        "=SUM(Turnover_Cases!AK2:AK1000)"
    ]
})

# Correct the "Custo Total" formula to sum the total column we created
resumo.loc[1, "Valor"] = "=SUM(Turnover_Cases!AL2:AL1000)"

# Inputs_Globais sheet
inputs = pd.DataFrame({
    "Campo": [
        "Periodo_Inicio",
        "Periodo_Fim",
        "HC_Inicio",
        "HC_Fim",
        "Desligamentos_No_Periodo",
        "Admissoes_No_Periodo",
        "Dias_Uteis_No_Periodo",
        "Observacoes"
    ],
    "Valor": [
        "",
        "",
        "",
        "",
        "",
        "",
        "22",
        "Use o campo Valor_Diario_do_Posto_R$ para refletir a receita/margem gerada pelo posto por dia. Fator_Cobertura_% = parte do valor diário que foi coberta pela equipe/automação; se nada foi coberto, use 0."
    ]
})

# Write to Excel
file_path = "/mnt/data/Turnover_Cost_Template_BR.xlsx"
with pd.ExcelWriter(file_path, engine="openpyxl") as writer:
    df_all.to_excel(writer, index=False, sheet_name="Turnover_Cases")
    resumo.to_excel(writer, index=False, sheet_name="Resumo")
    inputs.to_excel(writer, index=False, sheet_name="Inputs_Globais")

file_path
