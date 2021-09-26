/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    console.log ('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
    const activeArticles = document.querySelectorAll('.posts article.active');


    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');
    console.log ('href', articleSelector);
    const targetArticle = document.querySelectorAll(articleSelector);

    targetArticle.classList.add('active');

  };

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks(){
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  }
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';

  for (let article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHtml = '<li><a href="#' + articleId '"><span>' + articleTitle '</span></a></li>';

    titleList.innerHTML = titleList.innerHTML + linkHTML;

    html = html + linkHTML;
  }

    titleList.innerHTML = html;

  generateTitleLinks ();
}
