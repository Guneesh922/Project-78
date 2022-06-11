var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F02%2F33%2F72%2F20%2F360_F_233722058_wPO06GEOc08MDjthBZGZpB5Is6TvfxgS.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dlittle%2520boy%2520clipart&tbnid=haXwni_1irPRfM&vet=12ahUKEwjr8O_EoqX4AhVY_TgGHTt_AmoQMygNegUIARD_AQ..i&docid=uG1AAW7_MRamhM&w=254&h=360&q=boy&hl=en&ved=2ahUKEwjr8O_EoqX4AhVY_TgGHTt_AmoQMygNegUIARD_AQ" , "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst.depositphotos.com%2F1007989%2F1258%2Fi%2F600%2Fdepositphotos_12583600-stock-photo-senior-rocking-chair.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fclipart-grandma.html&tbnid=tcvIhiO4NN9rKM&vet=12ahUKEwi31OfdpqX4AhWiitgFHXsMDc4QMygBegUIARDdAQ..i&docid=8FX5etZQJoP4_M&w=384&h=600&q=grandmother%20clipart&hl=en&ved=2ahUKEwi31OfdpqX4AhWiitgFHXsMDc4QMygBegUIARDdAQ"];
var names = ["Famaily Book","JaganNath Gupta", "Sachin Gupta","Sneha Gupta", "Guneesh Gupta" , "Arvind Gupta"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
