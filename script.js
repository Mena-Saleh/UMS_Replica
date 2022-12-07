dots = document.querySelectorAll(".control-dots i");
cards = document.querySelectorAll(".slider-card")

const nextCard = () =>{

let i;
for(i = 0; i < dots.length; i++)
{
    if(dots[i].classList.contains("dot-active"))
    {
        break;
    }
}


let nextIndex = (i + 1)%3
dots[nextIndex].classList.add("dot-active")
cards[nextIndex].classList.add("card-active")

dots[i].classList.remove("dot-active")
cards[i].classList.remove("card-active")

}



const prevCard = () =>{

    let i;
    for(i = 0; i < dots.length; i++)
    {
        if(dots[i].classList.contains("dot-active"))
        {
            break;
        }
    }
    
    
    let prevIndex = (i + 2)%3
    dots[prevIndex].classList.add("dot-active")
    cards[prevIndex].classList.add("card-active")
    
    dots[i].classList.remove("dot-active")
    cards[i].classList.remove("card-active")
    
    }



    const activateCard = (event) =>{

        id = event.target.id[4];

        for(let i = 0; i < cards.length; i ++)
        {

            dots[i].classList.remove("dot-active")
            cards[i].classList.remove("card-active")            
            
        }

        dots[id].classList.add("dot-active")
        cards[id].classList.add("card-active")
    }


    for(let i = 0; i < dots.length; i ++){
        dots[i].addEventListener("click", activateCard);
    }