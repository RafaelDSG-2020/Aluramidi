

function tocaSom(Seletoraudio)
{
    const elemento=document.querySelector(Seletoraudio);
    if(elemento === null)
    {
        alert('Elemento Não Encontrado!!');
    }
    else if(elemento /*elemento != null */&& elemento.localName === 'audio')
    {
        elemento.play();
    }
    
}



/*function tocaSom(Seletoraudio)
{
    document.querySelector(Seletoraudio).play();
}*/


/*function tocaSomPom()
{
    document.querySelector('#som_tecla_pom').play()
}*/



const listadeteclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont < listadeteclas.length; cont++) 
{
    const tecla = listadeteclas[cont];
    const instrumento = tecla.classList[1];

    //console.log(tecla);

    // template string
    const idaudio = `#som_${instrumento}`;
    tecla.onclick= function()
    {
        tocaSom(idaudio);
    }
    tecla.onkeydown = function(evento)
    {
        console.log(evento.code==='Enter');

        if (evento.code === 'Space' || evento.code === 'Enter' ) 
        {
            listadeteclas[cont].classList.add('ativa');    
        }
        
    }

    tecla.onkeyup = function()
    {
        tecla.classList.remove('ativa');
    }
}
/*
let conta=0;

while(conta < listadeteclas.length)
{

    const tecla = listadeteclas[conta];
    const instrumento = tecla.classList[1];
    // template string
    const idaudio = `#som_${instrumento}`;

    tecla.onclick= function()
    {
        tocaSom(idaudio);
    }
    conta++;
    console.log(conta);
}*/


/*for (let cont = 0; cont < listadeteclas.length; cont++) {
    listadeteclas[cont].onclick= tocaSomPom;

    console.log(cont);
    
}*/



//document.querySelector('.tecla_pom').onclick=tocaSomPom;/* não colocar os pareteses da função.Pois  faz com que tenha uma forma ativa da função. Sem os parenteses fica so a forma */

