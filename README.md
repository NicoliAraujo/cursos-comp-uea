# cursos-comp-uea
Repositório cujo objetivo consiste de obter informações relativas aos discentes dos cursos de áreas relacionadas com a computação na Universidade do Estado do Amazonas.

## Diretórios

* **dicionarios:** contém os dicionários utilizados para determinar o gênero dos indivíduos na lista de discentes dos cursos, por meio do módulo LeGendary

* **LeGendary:** é o módulo (definição e link)

* **notebooks:** contém os notebooks nos quais as manipulações são feitas

   - **Pegar_Alunos:** pega a lista de alunos das páginas web salvas e gera os csvs de cada curso. Os outputs são salvos em outputs/dfs-cursos

   - **Cursos-genero:** responsável por detectar o gênero dos alunos a partir do nome utilizando o módulo LeGendary e os dicionários de nomes

   - **Nomes-df:** gera os dicionários de nomes

* **outputs:** contém os csvs e gráficos gerados

* **paginas-web:** contém as páginas web com informações que foram utilizadas para gerar os csvs

## Pré-requisitos:
* Python 3
* Bibliotecas: jupyter, pandas, numpy, codecs, seaborn, matplotlib
Para instalar as bibliotecas, execute

`sudo pip3 install <biblioteca>`

# Executar os notebooks
Para executar os notebooks:
`cd <path para cursos-comp-uea`
`jupyter notebook`

# Adicionando material ao repo
Para brincar com o repositório, siga estes passos:
1. Dê fork (botão que fica perto do clone or download). Assim, você estará adicionando o repositório à sua lista pessoal.
2. Clone seu novo repositório normalmente.
3. Realize suas alterações, faça commits e pushs.
4. Finalmente, navegue até a página do repositório em seu perfil do github e clique em "Compare and Pull Request".

# Boa diversão!
