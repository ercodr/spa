const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

const page1C = document.getElementById('page1C');
const page2C = document.getElementById('page2C');
const page3C = document.getElementById('page3C');

page1.addEventListener('click', () => {

        page1C.style.display = 'flex';
        page2C.style.display = 'none';
        page3C.style.display = 'none';
        active();
});

page2.addEventListener('click', () => {

        page2C.style.display = 'flex';
        page1C.style.display = 'none';
        page3C.style.display = 'none';
        active();
});

page3.addEventListener('click', () => {

        page3C.style.display = 'flex';
        page1C.style.display = 'none';
        page2C.style.display = 'none';
        active();
});



setInterval( ()=>{

        if(page1C.style.display != 'none'){
    
            page1.style.background = 'rgb(0, 47, 134)';
    
            page2.style.background = 'rgb(0, 168, 219)';
            page3.style.background = 'rgb(0, 168, 219)';
        
        } else if(page2C.style.display != 'none'){
    
            page2.style.background = 'rgb(0, 47, 134)';
    
            page1.style.background = 'rgb(0, 168, 219)';
            page3.style.background = 'rgb(0, 168, 219)';
            
        } else if(page3C.style.display != 'none'){
    
            page3.style.background = 'rgb(0, 47, 134)';
    
            page1.style.background = 'rgb(0, 168, 219)';
            page2.style.background = 'rgb(0, 168, 219)';
    
        };
}, 0)
