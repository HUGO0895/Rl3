class Cliente{
   #cpf
    constructor(nome,cpf,endereco){
        this.nome=nome,
        this.#cpf=cpf,
        this.endereco=endereco
        this.telefones=new Set()
    }
    get verCpf(){
        return this.#cpf;
    }
    get verNomeCaixaBaixa(){
        return this.nome.toLowerCase();
    }
    get verNomeCaixaAlta(){
        return this.nome.toUpperCase();
    }
    get verTelefones(){
        let string_f="";
        for(let x of this.telefones){
            let {ddd,numero}=x
            string_f+="DDD:"+ddd+" Númuro:"+numero+'\n'//BatataQuente;
        }
        return string_f;
    }
    get verEndereco(){
        return this.endereco.verEndCompleto;
    }
}

class Tel{
 constructor(ddd,numero){
    this.ddd=ddd,
    this.numero=numero
 }
}

class Endereco{
    constructor(estado,cidade,rua,numero){
        this.estado=estado,
        this.cidade=cidade,
        this.rua=rua,
        this.numero=numero
    }
    get verEstadoCaixaBaixa(){
        return this.estado.toLowerCase()
    }
    get verEstadoCaixaAlta(){
        return this.estado.toUpperCase()
    }
    get verRuaCaixaBaixa(){
        return this.rua.toLowerCase()
    }
     get verRuaCaixaAlta(){
        return this.rua.toUpperCase()
    }
    get verCidadeCaixaBaixa(){
        return this.cidade.toLowerCase()
}
    get verCidadeCaixaAlta(){
        return this.cidade.toUpperCase()
}
   get verNumero(){
    return this.numero;
   }
   get verEndCompleto(){
    return "Estado:"+this.estado+" "+"Cidade:"+this.cidade+" "+"Rua:"+this.rua;
   }

}

class Empresa{
    #cnpj
    constructor(razaosocial,nomeFantasia,cnpj,endereco){
         this.endereco=endereco,
         this.razaosocial=razaosocial,
         this.nomeFantasia=nomeFantasia,
         this.#cnpj=cnpj
         this.clientes=new Set(),
         this.telefones= new Set()
    }
    get verCnpj(){
        return this.#cnpj;
    }
    get verRazaoSocialCB(){
        return this.razaosocial.toLowerCase()
    }
     get verRazaoSocialCA(){
        return this.razaosocial.toUpperCase()
    }
    get verNomeFCB(){
        return this.nomeFantasia.toLowerCase()
    }
     get verNomeFCA(){
        return this.nomeFantasia.toUpperCase()
    }
    get verClientes(){
        let string_f=""
        for(let x of this.clientes){
         string_f+="Nome:"+x.nome+'\n'+
         x.endereco.verEndCompleto+'\n'+
         x.verTelefones+'\n'
        }
        return string_f;
    }
    get detalhes(){
        return "Razão Social:"+this.razaosocial+'\n'+
        "Nome Fantasia:"+this.nomeFantasia+'\n'+
        "---------------"+'\n'+
        this.verClientes
    }

}





const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);

const telEmpresa1 = new Tel("11", "99999-0001");
const telEmpresa2 = new Tel("11", "3333-4444");


const minhaEmpresa = new Empresa(
    "Supermercados Batata Doce S.A.", 
    "Batata Doce Supermercados", 
    "12.345.678/0001-90", 
    enderecoEmpresa
);


minhaEmpresa.telefones.add(telEmpresa1);
minhaEmpresa.telefones.add(telEmpresa2);


const endCli1 = new Endereco("SP", "São Paulo", "Rua Augusta", 500);
const cliente1 = new Cliente("João Silva", "123.456.789-00", endCli1);
cliente1.telefones.add(new Tel("11", "98888-1111"));
cliente1.telefones.add(new Tel("11", "3222-3333"));


const endCli2 = new Endereco("SP", "São Bernardo", "Rua das Flores", 120);
const cliente2 = new Cliente("Maria Oliveira", "987.654.321-00", endCli2);
cliente2.telefones.add(new Tel("11", "97777-2222"));
cliente2.telefones.add(new Tel("11", "3444-5555"));

const endCli3 = new Endereco("SP", "Santo André", "Av. Industrial", 800);
const cliente3 = new Cliente("Pedro Santos", "456.789.123-00", endCli3);
cliente3.telefones.add(new Tel("11", "96666-3333"));
cliente3.telefones.add(new Tel("11", "3666-7777"));

const endCli4 = new Endereco("SP", "São Caetano", "Rua das Palmeiras", 250);
const cliente4 = new Cliente("Ana Costa", "789.123.456-00", endCli4);
cliente4.telefones.add(new Tel("11", "95555-4444"));
cliente4.telefones.add(new Tel("11", "3888-9999"));


const endCli5 = new Endereco("SP", "Osasco", "Av. dos Autonomistas", 1500);
const cliente5 = new Cliente("Carlos Souza", "321.654.987-00", endCli5);
cliente5.telefones.add(new Tel("11", "94444-5555"));
cliente5.telefones.add(new Tel("11", "3777-8888"));


minhaEmpresa.clientes.add(cliente1);
minhaEmpresa.clientes.add(cliente2);
minhaEmpresa.clientes.add(cliente3);
minhaEmpresa.clientes.add(cliente4);
minhaEmpresa.clientes.add(cliente5);


console.log(minhaEmpresa.detalhes)

