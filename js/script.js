/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/
'use strict';

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
    optTagsListSelector = '.tags.list',
    optCloudClassCount = '5',
    optCloudClassPrefix = 'tag-size-';

  function generateTitleLinks(customSelector = ''){
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  }
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';

    for (let article of articles) {

      const articleId = article.getAttribute('id');

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      html = html + linkHTML;
    }

      titleList.innerHTML = html;

  generateTitleLinks ();
}

  function generateTags() {
    /* [NEW] create a new variable allTags with an empty object */

    let allTags = {};

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
    if(!allAuthors[articleAuthor]){
      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
    }
    authorList.innerHTML = html;
  }
  const authorList = document.querySelector('.authors'),
    authorsParams = calculateAuthorsParams(allAuthors);
  console.log('authorParams:', authorsParams);
  let allAuthorsHTML = {allAuthors: []};

  for (let author in allAuthors){
    allAuthorsHTML.allAuthors.push({
      author: author,
      count: allAuthors[author]
    });
    //old HTML code allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + ' (' + (allAuthors[author]) + ')</a></li>';

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

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
  for(let article of articles){
    /*find tags wrapper */
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
      /*generate HTML of the link */
      const linkHTMLData = {id: articleTags , title: tag };
      const linkHTML = templates.articleLink(linkHTMLData);

      console.log(linkHTML);
      /* add generated code to html variable */
      html += linkHTML + ' ';
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
      /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }
    /* END LOOP: for each tag */
    console.log('END LOOP: for each tag');
    /* insert HTML of all the links into the tags wrapper */
    console.log('insert HTML');

    tagWrapper.innerHTML = html;

    console.log('END LOOP: for every article');
  }
  /* END LOOP: for every article: */

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)
  /* [NEW] create variable for all links HTML code */
  const allTagsData = {tags: []};

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
  console.log('tagLinkHTML:', tagLinkHTML);

  allTagsData.tags.push({

    tag: tag,

    count: allTags[tag],

    className: calculateTagClass(allTags[tag], tagsParams)
  });
}
  /* [NEW] END LOOP: for each tag in allTags: */

  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = templates.tagCloudLink(allTagsData);

  console.log(allTagsData);
}
}
