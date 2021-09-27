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
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',

  function generateTitleLinks(){
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  }
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';

  for (let article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHtml = '<li><a href="#' + articleId'"> <span> '+ articleTitle '</span></a></li>';

    titleList.innerHTML = titleList.innerHTML + linkHTML;

    html = html + linkHTML;
  }

    titleList.innerHTML = html;

  generateTitleLinks ();
}

  function generateTags() {
    /* find all article */
    const articles = document.querySelectorAll('.post');
    /* START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      console.log(articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHTMLData = {id: articleTags , title: tag };
        const linkHTML = templates.articleLink(linkHTMLData);

        console.log(linkHTML);

        /* add generated code to html variable */
        html += linkHTML + ' ';
      }
      /* END LOOP: for each tag */
      console.log('END LOOP: for each tag');
      /*insert HTML of all the links into the tags wrapper */
      console.log('insert HTML');

        tagWrapper.innerHTML = html;

        console.log('END LOOP: for every article');
      }
    }
  generateTags();

  function tagClickHandler(event) {
    /* prevent default action fot this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the valur of "this" */
    const clickedElement = this,
    /* make a new constant "href" and read the attribute "href" of the clicked */
    href = clickedElement.getAttribute('href'),
    /* make a new constant "tag" and extract tag fro the "href" constant */
    tag = href.replace('#tag-', ''),
    /* find all tag links with class active */
    activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    /*START LOOP: for each active tag link */
    for (let activeTag of activeTags){
      /* remove class active */
      activeTag.classList.remove('active');
    }
    /* END LOOP: for each active tag link */
    /* find all tag links with "href" attribute equal to the "href" constant */
    const clickedTags = document.querySelectorAll('a[href="' + href + '"]');

    for (let clickedTag of clickedTags){
    clickedTag.classList.add('active');
    }
    /* START LOOP: for each found tag link */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
    /* execute function "generateTitleLinkd" with article selector as argument */
  }
  function  addClickListenersToTags() {
    /* find all links to tags */
    const tags = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let tag of tags){
      /* add tagClickHandler as event listener for that link */
      tag.addEventListener('click',tagClickHandler);
    /* END LOOP: for each link */
    }
  }

addClickListenersToTags();

function generateAuthors(){
  let allAuthors = {};
  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles){
    const authorList = article.querySelector(optArticleAuthorSelector);
    let html = '';
    const articleAuthor = article.getAttribute('data-author'),
      linkAuthorData = {author: articleAuthor},
      authorHTML = templates.articleAuthor(linkAuthorData);
    html = html + authorHTML;
  }

  authorList.innerHTML = templates.authorCloudLink(allAuthorsHTML);
}
generateAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clickedElement = this,
    href = clickedElement.getAttribute('href'),
    author = href.replace('#author-', ''),
    activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  for (let activeAuthor of activeAuthors){
    activeAuthor.classList.remove('active');
  }
  const clickedAuthors = document.querySelectorAll('a[href="' + href + '"]');

  for (let clickedAuthor of clickedAuthors){
    clickedAuthor.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  const authors = document.querySelectorAll('a[href^="#author-"]');

  for (let author of authors){
    author.addEventListener('click', authorClickHandler);
  }
}
addClickListenersToAuthors();
