class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
    validar(){
        for( let i in this){
            if(this[i] == '' || this[i] == undefined || this[i] == null){
                return false;
            }
        }
        return true;
    }
}
class Bd{

    constructor(){
        let id = localStorage.getItem('id');
        
        if(id === null){
            localStorage.setItem('id', 0);
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }
    gravar(d){
        let id = this.getProximoId();
        localStorage.setItem(id,JSON.stringify(d));
        localStorage.setItem('id',id);
    }
}

let bd = new Bd();


function cadastraDespesa(){
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);
    if(despesa.validar()){
        document.getElementById('tituloModal').innerHTML = 'Sucesso!';
        document.getElementById('tituloModal').className = 'modal-title text-success';
        document.getElementById('modalTexto').innerHTML = 'Despesa cadastrada com sucesso';
        document.getElementById('btnModal').innerHTML = 'Continuar cadastrando';
        document.getElementById('btnModal').className = 'btn btn-success';
        bd.gravar(despesa);
        $('#modalDeValidacao').modal('show');
    }else{
        document.getElementById('tituloModal').innerHTML = 'Erro!';
        document.getElementById('tituloModal').className = 'modal-title text-danger';
        document.getElementById('modalTexto').innerHTML = 'Verifique se todos os campos foram preenchidos';
        document.getElementById('btnModal').innerHTML = 'Voltar e corrigir';
        document.getElementById('btnModal').className = 'btn btn-danger';
        $('#modalDeValidacao').modal('show');
    }
}