$(function(){
  console.log("hello there ;)");
  //navigation
  $('.page').hide();
  if(window.location.hash == ""){
	$('#home').show();
	$(".nav-link[value='#home']").addClass("active");
  }else{
        $(window.location.hash).show();
	$(".nav-link[value='"+window.location.hash+"']").addClass("active");
  }
  $(".nav-link").on('click',function(){
    var value = $(this).attr("value");
    window.location.hash = value;
    $('.page').hide();
    $(value).show();
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
  $( window ).on( 'hashchange', function() {
   if(window.location.hash == ""){
    value = '#home';
   }else{
    value = window.location.hash;
   }
    $('.page').hide();
    $(value).show();
    $('.active').removeClass('active');
    $('.nav-link[value="'+value+'"]').addClass("active");
  });


  //GitGraph
  var gitgraph = new GitGraph({author: ""});
  gitgraph.template.colors = ["white","#ff8000","#94C7B2", "#4FBCF3"];
  gitgraph.template.commit.message.font = "normal 16pt Arial"

  var commits = [
  " - Initial Commit (26/05/1997)",
  " - Completed Primary School @ Junior School Nicosia",
  " - Accepted @ English School Nicosia",
  " - Started Highschool @ English School Nicosia",
  " - Passed Ham Radio exam and got a Lisense (5B4AJZ)",
  " - Elected for Ham Radio Club (5B4ES) President for 4 years",
  " - Volunteered and Helped organise Hack{Cyprus} with CEL",
  " - Created and Organized Hack{Cyprus}Code School with CEL",
  " - Created and was President of Tecnology club for 2 years",
  " - Started working as Web Developer @ Think Learning Centre",
  " - Completed A-Level: Double Maths with A*, A",
  " - Completed A-Level: Computing with A*",
  " - Completed A-Level: Physics with A",
  " - Joined Cyprus Army as Corporal",
  " - Created Think Learning Centre Website",
  " - Completed Army Service",
  " - Accepted @ Imperial Collage London",
  " - Started Computing @ Imperial Collage London",
  " - Volunteered for ICHack18",
  " - Took part in Google Hashcode 2018",
  " - Run and Elected for DoCSoc WebMaster 2018-19",
  " - Completed Year 1"];

  var master = gitgraph.branch("master")
  .commit(commits[0])
  .commit(commits[1])
  .commit(commits[2]);
  var English = master.branch("English School")
  .commit(commits[3]);
  master.commit(commits[4]);
  English.commit(commits[5]);
  master.commit(commits[6])
  .commit(commits[7]);
  English.commit(commits[8]);
  master.commit(commits[9]);
  var Think = master.branch("Think Learning Centre");
  English.commit(commits[10])
  .commit(commits[11])
  .commit(commits[12])
  .merge(master);
  master.commit(commits[13]);
  Think.commit(commits[14]);
  master.commit(commits[15])
  .commit(commits[16]);
  var Imperial = master.branch("Imperial Collage");
  Imperial.commit(commits[17])
  .commit(commits[18]);
  master.commit(commits[19]);
  Imperial.commit(commits[20]).commit(commits[21]);
});
