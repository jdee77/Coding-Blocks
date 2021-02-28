contacts = document.querySelectorAll(".contacts");
for(i = 0; i< contacts.length; i++)
{
    nm = contacts[i].innerHTML;
    contacts[i].innerHTML = `<i class="fa fa-user"></i> ${nm} <div class="end"></div>`;
}

end = document.querySelectorAll(".end");
for(i = 0; i< end.length; i++)
{
    end[i].innerHTML = '<i class="fa e fa-phone"></i><i class="fa e fa-envelope"></i>';
}