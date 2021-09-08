length = 50;
for(i = 1; i <= length; i++) {
    let request = new XMLHttpRequest();
    // let limit = 20;
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+i);
    request.onreadystatechange = function() {
        if((request.readyState === 4) && (request.status === 200)) {
            limit = 20;
            let data = JSON.parse(request.responseText);
                let pokemon = [];
                pokemon['id'] = data.id;
                pokemon['name'] = data.name;
                pokemon['type'] = data.types[0]["type"]["name"];
                pokemon['sprite'] = data.sprites.other['official-artwork']['front_default'];
                //console.log(pokemon['id']);
                display_output(pokemon);
        }
    }
    request.send();
}

function display_output(pokemon) {
    let output = '';
    output += '<div class="pokemon-con border align-items-center p-2 m-2">'
    output += '<div class="d-flex justify-content-between mb-1">';
    output += '<h2>';
    output += pokemon['name'];
    output += '</h2>';

    switch(pokemon['type']) {
        case 'normal':
            output += '<span class="type normal"><a href="https://brickbronze.fandom.com/wiki/Appendix:Normal_Type" title="Appendix:Normal Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'fire': 
            output += '<span class="type fire" ><a href="https://brickbronze.fandom.com/wiki/Appendix:Fire_Type" title="Appendix:Fire Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'water': 
            output += '<span class="type water"><a href="https://brickbronze.fandom.com/wiki/Appendix:Water_Type" title="Appendix:Water Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'electric': 
            output += '<span class="type electric"><a href="https://brickbronze.fandom.com/wiki/Appendix:Electric_Type" title="Appendix:Electric Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'grass': 
            output += '<span class="type grass"><a href="https://brickbronze.fandom.com/wiki/Appendix:Grass_Type" title="Appendix:Grass Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'bug':
            output += '<span class="type bug"><a href="https://brickbronze.fandom.com/wiki/Appendix:Bug_Type" title="Appendix:Bug Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'flying':
            output += '<span class="type flying"><a href="https://brickbronze.fandom.com/wiki/Appendix:Flying_Type" title="Appendix:Flying Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'fighting':
            output += '<span class="type fighting"><a href="https://brickbronze.fandom.com/wiki/Appendix:Fighting_Type" title="Appendix:Fighting Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'ice':
            output += '<span class="type ice"><a href="https://brickbronze.fandom.com/wiki/Appendix:Ice_Type" title="Appendix:Ice Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'rock':
            output += '<span class="type rock"><a href="https://brickbronze.fandom.com/wiki/Appendix:Rock_Type" title="Appendix:Rock Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'ground':
            output += '<span class="type ground"><a href="https://brickbronze.fandom.com/wiki/Appendix:Ground_Type" title="Appendix:Ground Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'poison':
            output += '<span class="type poison"><a href="https://brickbronze.fandom.com/wiki/Appendix:Poison_Type" title="Appendix:Poison Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'psychic':
            output += '<span class="type psychic"><a href="https://brickbronze.fandom.com/wiki/Appendix:Psychic_Type" title="Appendix:Psychic Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'ghost':
            output += '<span class="type ghost"><a href="https://brickbronze.fandom.com/wiki/Appendix:Ghost_Type" title="Appendix:Ghost Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'dragon':
            output += '<span class="type dragon"><a href="https://brickbronze.fandom.com/wiki/Appendix:Dragon_Type" title="Appendix:Dragon Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'dark':
            output += '<span class="type dark"><a href="https://brickbronze.fandom.com/wiki/Appendix:Dark_Type" title="Appendix:Dark Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'steel':
            output += '<span class="type steel"><a href="https://brickbronze.fandom.com/wiki/Appendix:Steel_Type" title="Appendix:Steel Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
        case 'fairy':
            output += '<span class="type fairy"><a href="https://brickbronze.fandom.com/wiki/Appendix:Fairy_Type" title="Appendix:Fairy Type"><span style="color: #F8F8F8;">';
            output += pokemon['type'];
            output += '</span></a></span>';
            break;
    }
    
    output += '</div>';
    output += '<figure class="img img-fluid border rounded">';
    output += '<img src="';
    output += pokemon['sprite'];
    output += '" class="img-fluid"></figure>';
    output += '</div>';
    document.getElementById('main-con').innerHTML += output;
}


