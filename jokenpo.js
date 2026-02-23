function jogar(){
    
    if(document.getElementById ('pedra').checked == false &&
    document.getElementById ('papel').checked == false
    && document.getElementById ('tesoura').checked == false){

    alert('selecione uma função')

    }
    else{
        let sorteio = Match.floor (Match.ramdom()*3);

        switch(sorteio){

            case 0:
                document.getElementById("pc").src = "pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "pctesoura.png"
                break;


        }
        if((document.getElementById("pedra").checked == true && sorteio ==0)
            ||(document.getElementById("papel".checked == true && sorteio ==1))
            ||(document.getElementById("tesoura").checked == true && sorteio ==2)){

        }
    }
}