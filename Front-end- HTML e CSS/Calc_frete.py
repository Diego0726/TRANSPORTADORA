nomeCliente=''
Email=''
Contato=0
Tonelada=0
Kmrodado=0
Valordiesel=6.69
Mcarros=['VUC','Toco','LS Tremidão','Volvo FH']


#input de informações de cadastro pelo usuario
nomeCliente=(input('Qual seu nome: '))
Email=(input('Seu email para contato: '))

while True:
    try:
        Contato = int(input('Telefone para contato: '))
        if 10000000000 <= Contato <= 99999999999: # é um número de 11 dígitos
            break
        print('Numero Incorreto')
    except ValueError:
        print('Não foi digitado um número')

#Pedido de Entrega

Tonelada=int(input('Quantas toneladas serão transportadas: '))
Kmrodado=int(str (input('Qual a distância rodada: ')))


#VUC= 6,2km/l; Toco=6,2 km/l; LS Tremidão= 4.01km/l; Volvo FH=1.41km/l;

if Tonelada <= 6 :
    calc= (Valordiesel/6.2)*Kmrodado
    Mcarros=(Mcarros[0])
else:
    if Tonelada <= 16 :
        calc= (Valordiesel/6.2)*Kmrodado
        Mcarros=(Mcarros[1])
    else:
        if Tonelada <= 49 :
            calc= (Valordiesel/4.01)*Kmrodado
            Mcarros= (Mcarros[2])
        else:
            if Tonelada <=74  :
                calc= (Valordiesel/1.41)*Kmrodado
                Mcarros=(Mcarros[3])
            else:
               print=("Operação inválida")
            
#pra gerar um boleto precisaria do , gasto de gasolina(calc); salario do funcionario(salario);  valor do frete por tonelada ;
#round usado para deixa apenas 2 numeros após a vírgula
  
ToneladaVal=(121.90*Tonelada)*0.153
Bonus_Funcionario=Kmrodado/10
boleto=round (ToneladaVal+Bonus_Funcionario+calc,2)

print(f"Muito obrigado Sr(a){nomeCliente} seu pedido foi concluido, o valor total deu R${boleto:,} e será levado por um caminhão modelo {Mcarros}")