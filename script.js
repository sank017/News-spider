 page=0;
nextpage=1;
previouspage=0
function getNews(catagory,page){
    const api = "pub_30647f724fbb0578f2d139ef3b083afedbde"
    fetch("https://newsdata.io/api/1/news?apikey="+api+"&language=en&category="+catagory+"&page="+page).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
            previouspage=page-1;
        nextpage=data.nextPage;
        function newsCard(i){
            if(data.results[i].image_url==null){
                data.results[i].image_url='https://www.humanium.org/en/wp-content/uploads/2019/09/pic2-1024x665.jpg';
            }
            document.getElementById('newscard').innerHTML += "<div class='card' >"+
            "<img src="+data.results[i].image_url+" class='card-img-top' alt='...'>"+
            "<div class='card-body'>"+
              "<h5 class='card-title'>"+data.results[i].title+" </h5>"+
              "<p class='card-text'>"+data.results[i].description+" </p>"+
              " <footer class='blockquote-footer'>Source : <cite title='Source Title'>"+data.results[i].source_id+" </cite></footer>"+
              " <footer class='blockquote-footer'>Published date : <cite title='Source Title'>"+data.results[i].pubDate+" </cite></footer>"+
              " <a href="+data.results[i].link+" class='btn btn-primary'>Read More</a>"+
            "</div>"+
          "</div>";
        }
        
        for(let i=0;i<data.results.length;i++){
            newsCard(i);
        }

        if(nextpage==1){
            document.getElementById('previousbutton').className += ' disabled';
        }
        else{
            document.getElementById('previousbutton').className = 'btn btn-info mx-3'
        }

        if(nextpage == null){
            document.getElementById('nextbutton').className += ' disabled' 
        }
        else{
            document.getElementById('nextbutton').className += 'btn btn-info mx-3'
        }

    })
}

getNews("top",page);



    previousbutton.addEventListener('click',()=>{
            document.getElementById('newscard').innerHTML = "";
            getNews("top",previouspage);
    })

    nextbutton.addEventListener('click',()=>{
            document.getElementById('newscard').innerHTML = "";
            getNews("top",nextpage);
    })  


    function activate(active){
        page=0;

        document.getElementById('home').className = ' nav-link';
        document.getElementById('business').className = ' nav-link';
        document.getElementById('entertainment').className = ' nav-link';
        document.getElementById('environment').className = ' nav-link';
        document.getElementById('food').className = ' nav-link';
        document.getElementById('health').className = ' nav-link';
        document.getElementById('politics').className = ' nav-link';
        document.getElementById('science').className = ' nav-link';
        document.getElementById('sports').className = ' nav-link';
        document.getElementById('technology').className = ' nav-link';
        document.getElementById('world').className = ' nav-link';
       

        if(document.getElementById('home').innerHTML == active){
            document.getElementById('home').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("top",page);
            document.getElementById('heading').innerHTML = "Top News"
            document.getElementById('title').innerHTML = "NewsSpider | Home"
        }

        if(document.getElementById('business').innerHTML == active){
            document.getElementById('business').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("business",page);
            document.getElementById('heading').innerHTML = "Business News"
            document.getElementById('title').innerHTML = "NewsSpider | Business"
        }

        else if(document.getElementById('entertainment').innerHTML == active){
            document.getElementById('entertainment').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("entertainment",page);
            document.getElementById('heading').innerHTML = "Entertainment News"
            document.getElementById('title').innerHTML = "NewsSpider | Entertainment"
        }

        else if(document.getElementById('environment').innerHTML == active){
            document.getElementById('environment').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("environment",page);
            document.getElementById('heading').innerHTML = "Environment News"
            document.getElementById('title').innerHTML = "NewsSpider | Environment"
        }

        else if(document.getElementById('food').innerHTML == active){
            document.getElementById('food').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("food",page);
            document.getElementById('heading').innerHTML = "Food News"
            document.getElementById('title').innerHTML = "NewsSpider | Food"
        }

        else if(document.getElementById('health').innerHTML == active){
            document.getElementById('health').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("health",page);
            document.getElementById('heading').innerHTML = "Health News"
            document.getElementById('title').innerHTML = "NewsSpider | Health"
        }

        else if(document.getElementById('politics').innerHTML == active){
            document.getElementById('politics').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("politics",page);
            document.getElementById('heading').innerHTML = "Politics News"
            document.getElementById('title').innerHTML = "NewsSpider | Politics"
        }

        else if(document.getElementById('science').innerHTML == active){
            document.getElementById('science').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("science",page);
            document.getElementById('heading').innerHTML = "Science News"
            document.getElementById('title').innerHTML = "NewsSpider | Science"
        }

        else if(document.getElementById('sports').innerHTML == active){
            document.getElementById('sports').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("sports",page);
            document.getElementById('heading').innerHTML = "Sports News"
            document.getElementById('title').innerHTML = "NewsSpider | Sports"
        }

        else if(document.getElementById('technology').innerHTML == active){
            document.getElementById('technology').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("technology",page);
            document.getElementById('heading').innerHTML = "Technology News"
            document.getElementById('title').innerHTML = "NewsSpider | Technology"
        }

        else if(document.getElementById('world').innerHTML == active){
            document.getElementById('world').className += ' active';
            document.getElementById('newscard').innerHTML = "";
            getNews("world",page);
            document.getElementById('heading').innerHTML = "World News"
            document.getElementById('title').innerHTML = "NewsSpider | World"
        }
    }

    
    home.addEventListener('click',()=>{
       activate("Home");
    })

    business.addEventListener('click',()=>{
        activate("Business");
    })

    entertainment.addEventListener('click',()=>{
        activate("Entertainment");
    })

    environment.addEventListener('click',()=>{
        activate("Environment");
    })

    food.addEventListener('click',()=>{
        activate("Food");
    })

    health.addEventListener('click',()=>{
        activate("Health");
    })
    
    politics.addEventListener('click',()=>{
        activate("Politics");
    })
    
    science.addEventListener('click',()=>{
        activate("Science");
    })
    
    sports.addEventListener('click',()=>{
        activate("Sports");
    })
    
    technology.addEventListener('click',()=>{
        activate("Technology");
    })
    
    world.addEventListener('click',()=>{
        activate("World");
    })
    
    

