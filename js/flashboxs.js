function Visible(anId)
{
    node = document.getElementById(anId);
    node.style.display = "flex";
    node.style.opacity = "1";
    setTimeout(function(){ Hidden(anId); }, 10000);
}

  function Hidden(anId)
  {
      node = document.getElementById(anId);
      node.style.opacity = "0";
      setTimeout(function(){ node.style.display = "none"; }, 400);
  }

  function BoxMessage(anIdmsg, anId, text)
  {
      $(anIdmsg).text(text);
      Visible(anId);
  }