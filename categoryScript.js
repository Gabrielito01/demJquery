<html lang="en"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
  
    <title>Shop Homepage - Start Bootstrap Template</title>
  
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
    <!-- Custom styles for this template -->
    <style type="text/css">
    body{
        padding-top: 56px;
       

    }
     #sposta{
             position: fixed;
            top: 50%;
            left: 50%;
            height: 100%;
            width: 100%;
            z-index: 9999999;
        }
        #backgr {
            background: url('https://images.alphacoders.com/510/thumb-1920-510026.jpg');
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: -10;
            opacity: 0.5;
            -moz-background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
.box {
  margin: 0 auto;
  width: 40px;
  height: 140px;
  position: relative;
}
.gravity {
  width: 40px;
  height: 40px;
  animation: bounce 1s cubic-bezier(0.68, 0.35, 0.29, 0.54) infinite;
}
.ball {
  width: 40px;
  height: 40px;
  background-image: url('https://image.flaticon.com/icons/svg/33/33736.svg');
  background-size: cover;
  animation: roll .6s linear infinite;
}

@keyframes roll {
  0% {}
  100% { transform: rotate(360deg) }
}
@keyframes bounce {
  0% {}
  50% { transform: translateY(100px) }
  100% {}
}
@keyframes shadowScale {
  0% {}
  50% { transform: scaleX(1); opacity: .8;}
  100% {}
}
  .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            width: 100%;
            background-image: url(https://www.contra-ataque.it/wp-content/uploads/2015/06/top_european_football_leagues.jpg);
            background-size: cover;
            background-repeat: no-repeat;
        }
     #foooter {
      padding-top: 115px;
      align-items: flex-end;
    }

    </style>
  
  </head>
  
  <body onload="myFunction()">
  <div id="backgr"> 

  
</div>
      <div id="sposta">
    <div id="box">
        <div class="gravity">
            <div class="ball"></div>
        </div>
    </div>
    </div>
   <div id="wrap">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"> Soccer Score</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <!-- Page Content -->
    <div class="container">
  
      <div class="row">
  
        <div class="col-lg-3">
  
           <div class="wrapper mt-4">
                    </div>
          <div class="list-group" id="listGroup">
          </div>
  
        </div>
        <!-- /.col-lg-3 -->
  
        <div class="col-lg-9">
  
          <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
            </ol>
            <div class="carousel-inner" id="heroBanner" role="listbox">
              <div class="carousel-item">
                <img class="d-block img-fluid" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/408fd07f-2369-407d-a6db-724beb218ddc/dae5bpx-bcdce3de-5811-43e9-bff9-497d3aa8b0a6.jpg/v1/fill/w_1024,h_576,q_75,strp/serie_a_2016_wallpapers_by_jafarjeef_dae5bpx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNDA4ZmQwN2YtMjM2OS00MDdkLWE2ZGItNzI0YmViMjE4ZGRjXC9kYWU1YnB4LWJjZGNlM2RlLTU4MTEtNDNlOS1iZmY5LTQ5N2QzYWE4YjBhNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.P8fNhgOX6vrhUk_XkrXLjXTTtC_d8wmKxe2WABLL_28" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="https://wallpapercave.com/wp/wp3737390.jpg" alt="Second slide">
              </div>
              <div class="carousel-item active">
                <img class="d-block img-fluid" src="https://i.ytimg.com/vi/hBPUUGHmcms/maxresdefault.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
  
          <div class="row" id="listItems">



          </div>
          <!-- /.row -->
  
        </div>
        <!-- /.col-lg-9 -->
  
      </div>
      <!-- /.row -->
  
    </div>
    <!-- /.container -->
  
    <!-- Footer -->
    <div id="foooter">
    <footer class="py-5 bg-dark fixed bottom">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright © Gabrielito Website 2019</p>
      </div>
    </footer>
    </div>
  
      <!-- /.container -->
    <!-- Bootstrap core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
  <script src="./categoryScript.js"></script>
  <script>
        var myVar;

        function myFunction() {
            document.getElementById("wrap").style.display = "none";
            myVar = setTimeout(showPage, 1100);
        }

        function showPage() {
            document.getElementById("box").style.display = "none";
            document.getElementById("wrap").style.display = "block";
            document.getElementById("sposta").style.display="none";
        }

    </script>
  
  </body></html>
