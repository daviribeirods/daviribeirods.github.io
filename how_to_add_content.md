# 📚 Guia Prático: Como Adicionar Novos Conteúdos no Portfólio

Este guia foi criado para que você possa **adicionar novos projetos e artigos de forma rápida, simples e independente**, sem precisar mexer no layout HTML, sem alterar JavaScript e sem depender de IAs para manter seu portfólio sempre atualizado.

---

## 📑 Sumário

1. [Como Adicionar um Novo Projeto](#1-como-adicionar-um-novo-projeto)
2. [Como Adicionar um Novo Artigo / Nota no Caderno](#2-como-adicionar-um-novo-artigo--nota-no-caderno)
3. [Como Adicionar Imagens e Fotos](#3-como-adicionar-imagens-e-fotos)
4. [Lista de Ícones de Tecnologias Prontos](#4-lista-de-%C3%ADcones-de-tecnologias-prontos)
5. [Publicando as Alterações no GitHub](#5-publicando-as-altera%C3%A7%C3%B5es-no-github)

---

## 1. Como Adicionar um Novo Projeto

Todos os projetos do portfólio ficam centralizados no arquivo:
📂 **`_data/projects.yml`**

### Passo a passo:
1. Abra o arquivo `_data/projects.yml`.
2. Vá até o final do arquivo.
3. Copie e cole o modelo abaixo, preenchendo com as informações do seu projeto.

### 📋 Modelo para Copiar e Colar (Projeto):

```yaml
- id: meu-novo-projeto
  title_en: "Machine Learning Fraud Detection Pipeline"
  title_pt: "Pipeline de Detecção de Fraudes com Machine Learning"
  desc_en: "End-to-end classification system detecting fraudulent transactions with calibrated thresholds, reducing false positives by 35% in high-volume streams."
  desc_pt: "Sistema de classificação de ponta a ponta para detecção de transações fraudulentas com threshold calibrado, reduzindo falsos positivos em 35%."
  tag_en: "Fraud & Classification"
  tag_pt: "Fraude & Classificação"
  image: "/assets/img/projects/meu_projeto.webp"
  link_url: "https://github.com/daviribeirods/nome-do-repositorio"
  link_text_en: "View on GitHub"
  link_text_pt: "Ver no GitHub"
  techs:
    - name: "Python"
      icon: "devicon-python-plain text-primary"
    - name: "Scikit-Learn"
      icon: "devicon-scikitlearn-plain text-warning"
    - name: "Pandas"
      icon: "devicon-pandas-plain text-info"
    - name: "Docker"
      icon: "devicon-docker-plain text-primary"
```

### 💡 Explicação dos Campos do Projeto:
| Campo | Descrição | Exemplo |
| :--- | :--- | :--- |
| `id` | Identificador único (sem espaços ou acentos) | `meu-novo-projeto` |
| `title_en` / `title_pt` | Título do projeto em Inglês e Português | `"Customer Churn Prediction"` |
| `desc_en` / `desc_pt` | Resumo explicativo do projeto (aceita tags `<strong>` para negrito) | `"Modelo preditivo treinado..."` |
| `tag_en` / `tag_pt` | Selo no canto da imagem/gráfico | `"Machine Learning"`, `"NLP"` |
| `image` | Caminho da imagem salva na pasta de imagens | `"/assets/img/projects/foto.webp"` |
| `link_url` | Link do repositório, app Streamlit ou demonstração | `"https://github.com/..."` |
| `link_text_en` / `link_text_pt` | Nome do link que aparece no canto inferior direito | `"View on GitHub"` / `"Ver no GitHub"` |
| `techs` | Lista de tecnologias usadas com nome e ícone | `name: "Python"`, `icon: "devicon-python-plain"` |

> ✨ **Dica:** O contador de projetos na barra de filtros (`All`, `Projects`) se atualiza **automaticamente** assim que você adiciona o novo item!

---

## 2. Como Adicionar um Novo Artigo / Nota no Caderno

Todos os artigos do blog / caderno ficam na pasta:
📂 **`_posts/`**

### Passo a passo:
1. Crie um novo arquivo dentro da pasta `_posts/`.
2. O nome do arquivo **deve seguir o padrão de data do Jekyll**:
   `AAAA-MM-DD-titulo-do-artigo.md`
   *(Exemplo: `2026-04-10-analise-de-cluster.md`)*
3. Cole o modelo abaixo no início do arquivo e escreva seu texto.

### 📋 Modelo para Copiar e Colar (Artigo):

```markdown
---
layout: post
title: "Guia Prático: Como Calibrar Modelos de Fraude"
title_en: "Practical Guide: How to Calibrate Fraud Detection Models"
title_pt: "Guia Prático: Como Calibrar Modelos de Fraude"
desc_en: "A deep dive into precision-recall trade-offs, cost-sensitive learning, and threshold tuning for real-time banking pipelines."
desc_pt: "Uma análise aprofundada sobre trade-offs de precisão e recall, aprendizado sensível a custos e calibração de threshold."
tag_en: "Tutorial & Modeling"
tag_pt: "Tutorial & Modelagem"
date_en: "Published on April 10, 2026"
date_pt: "Publicado em 10/04/2026"
date: 2026-04-10
image: "/assets/img/blog/minha_foto_artigo.webp"
techs:
  - name: "Python"
    icon: "devicon-python-plain text-primary"
  - name: "Machine Learning"
    icon: "bi bi-cpu text-warning"
  - name: "Statistics"
    icon: "bi bi-graph-up-arrow text-success"
---

<figure class="mb-4">
    <img src="{{ '/assets/img/blog/minha_foto_artigo.webp' | relative_url }}" alt="Capa do Post" class="img-fluid rounded shadow w-100">
</figure>

<div class="lang-block lang-block-pt">
<p>Olá! Neste artigo vamos explorar como calibrar thresholds em modelos de classificação...</p>

<h3 class="mt-4 mb-3">1. O Problema do Desbalanceamento</h3>
<p>Em detecção de fraude, menos de 0.1% das transações são positivas...</p>

<ul>
    <li><strong>Precisão vs Recall:</strong> O custo financeiro de um falso positivo.</li>
    <li><strong>Curva PR:</strong> Por que a curva ROC pode ser enganosa.</li>
</ul>

<p>Espero que este guia tenha sido útil! Compartilhe suas impressões comigo no LinkedIn.</p>
</div>

<div class="lang-block lang-block-en">
<p>Hi! In this post we explore how to tune and calibrate classification thresholds...</p>

<h3 class="mt-4 mb-3">1. The Imbalance Challenge</h3>
<p>In fraud detection, typically fewer than 0.1% of transactions are fraudulent...</p>

<ul>
    <li><strong>Precision vs Recall:</strong> The business cost of false positives.</li>
    <li><strong>PR Curves:</strong> Why ROC curves can be misleading in extreme imbalance.</li>
</ul>

<p>I hope this breakdown was valuable! Feel free to connect on LinkedIn.</p>
</div>
```

> 🌐 **Nota sobre Idiomas nos Artigos:**
> * Se você quiser escrever o artigo **apenas em Português** (ou apenas em Inglês), basta colocar o texto normalmente fora das tags `<div class="lang-block">`. O modal exibirá o texto diretamente!
> * Se quiser ter versão em Inglês e Português para o leitor alternar com 1 clique, use os blocos `<div class="lang-block lang-block-pt">` e `<div class="lang-block lang-block-en">` como no modelo acima.

---

## 3. Como Adicionar Imagens e Fotos

Recomendamos colocar as imagens nas pastas dedicadas dentro de `assets/img/`:

*   🖼️ **Para capas de projetos:** salve a imagem em `assets/img/projects/` (ex: `assets/img/projects/meu_projeto.webp`).
*   📝 **Para capas de artigos:** salve a imagem em `assets/img/blog/` (ex: `assets/img/blog/minha_foto.webp`).

> 💡 **Formato recomendado:** `.webp` ou `.jpg` / `.png` com boa resolução e tamanho comprimido (ex: 800x450px ou 1200x675px) para o site carregar super rápido.

---

## 4. Lista de Ícones de Tecnologias Prontos

Para colocar no campo `icon` das tecnologias, você pode usar os ícones do **Devicon** ou do **Bootstrap Icons**:

| Tecnologia | Código do Ícone (`icon`) |
| :--- | :--- |
| **Python** | `devicon-python-plain text-primary` |
| **Pandas** | `devicon-pandas-plain text-info` |
| **NumPy** | `devicon-numpy-plain text-primary` |
| **Scikit-Learn** | `devicon-scikitlearn-plain text-warning` |
| **TensorFlow** | `devicon-tensorflow-line text-warning` |
| **PyTorch** | `devicon-pytorch-original text-danger` |
| **PostgreSQL** | `devicon-postgresql-plain text-primary` |
| **FastAPI** | `devicon-fastapi-plain text-success` |
| **Docker** | `devicon-docker-plain text-info` |
| **Git / GitHub** | `devicon-git-plain text-danger` |
| **Streamlit** | `devicon-streamlit-plain text-danger` |
| **Plotly / Gráficos** | `bi bi-pie-chart-fill text-warning` |
| **Estatística / Métricas** | `bi bi-graph-up-arrow text-success` |
| **Machine Learning / IA** | `bi bi-cpu text-warning` |
| **Escrita / Artigo** | `bi bi-pencil-square text-primary` |
| **Banco de Dados** | `bi bi-database text-info` |

---

## 5. Publicando as Alterações no GitHub

Depois de adicionar seu novo projeto em `_data/projects.yml` ou seu artigo em `_posts/`:

1. No terminal do seu computador (ou pelo GitHub Desktop / VS Code):
   ```bash
   git add .
   git commit -m "feat: adicionar novo projeto/artigo"
   git push origin main
   ```

2. Pronto! O GitHub Pages atualizará o seu site no ar em cerca de 30 a 60 segundos com seu novo projeto e contadores devidamente ajustados! 🚀

