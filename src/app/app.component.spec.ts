// importações
import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component';
import { Pessoa } from './Pessoa';

// descrição do teste unitário
describe('AppComponent', () => {
  
  // Inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppComponent]
    }).compileComponents();
  });

  // Validar a variável texto
  it('Validar variável de texto', () => {

    // Fixture
    const fixture  = TestBed.createComponent(AppComponent);

    // Obter as variáveis e funções do componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.texto).toEqual('Aprendendo a trabalhar com o Jasmine e o Karma');



  })

    // Validar a função soma
    it('Valifar função soma', () => {
      
        // Fixture
        const fixture  = TestBed.createComponent  (AppComponent);
  
        // Obter as variáveis e funções do  componente
        const componente = fixture. componentInstance;

        // Executar a função e obter o retorno
        let retorno = componente.soma(5, 6)
  
        // Validação
        expect(typeof retorno).toBe('number');
      });

      it('Função retornar pessoa', () => {
        
        // Fixture
        const fixture  = TestBed.createComponent  (AppComponent);
  
        // Obter as variáveis e funções do  componente
        const componente = fixture. componentInstance;

        // Criar um objeto do tipo Pessoa
        const obj = new Pessoa('Ralf', 33);

        const retorno = componente.retornarPessoa(obj)

        // Validar
        expect(retorno instanceof Pessoa).toBeTrue();

      })


})