module.exports = function () {
  document.getElementById("container").innerHTML += `<h2 style="display:inline"><i class="fa fa-file-text"></i> ${langdata["ARTICLE_MANAGEMENT"][lang_name]}</h2>
     <button onclick="add_a_article();" class="fluentbtn"><i class="fa fa-plus"></i> ${langdata["ADD_AN_ARTICLE"][lang_name]}</button>
     <hr />
  <div class="alert alert-info" role="alert">
  <i class="fa fa-smile-o"></i> ${langdata["HINT_USING_MD_IN_ARTICLES"][lang_name]}
</div>
  
  `;

  document.getElementById("edit_article_meta_dialog_footer").innerHTML = `
  <button type="button" class="fluentbtn" data-bs-dismiss="modal">${langdata["CANCEL"][lang_name]}</button>
  <button type="button" class="fluentbtn fluentbtn-blue" id="save_article_meta_btn">${langdata["SAVE_CONFIGURATION"][lang_name]}</button>
  
  
  `

  for (let i = 0; i < blog["文章列表"].length; i++) {
    if (blog["文章列表"][i]["是否置顶"]) {
      document.querySelector("#container").innerHTML += `
        <div class="article-item" id="article-item-${i}">
            <div class="article-item-sub"><i class="fa fa-thumb-tack"></i> ${langdata["ARTICLE_IS_TOP"][lang_name]}</div>
            <h2>${blog["文章列表"][i]["文章标题"]}</h2>
           
            
        </div>
            `

    }


  }


  for (let i = 0; i < blog["文章列表"].length; i++) {
    if (blog["文章列表"][i]["是否置顶"]) {

    } else {



      document.querySelector("#container").innerHTML += `
        <div class="article-item" id="article-item-${i}">
            <h2>${blog["文章列表"][i]["文章标题"]}</h2>
           
            
        </div>
            `

      document.querySelector("#article-item-" + i).innerHTML += `
                <div class="article-item-sub" id="article-item-sub-${i}"></div>
                `;


      document.querySelector("#article-item-sub-" + i).innerHTML += `
      <i class="fa fa-calendar"></i> ${langdata["ARTICLE_CREATEDAT"][lang_name]}${blog["文章列表"][i]["创建日期"]}，${langdata["LASTMODIFIEDAT"][lang_name]} ${blog["文章列表"][i]["修改日期"]}<br />
            `;

      if (blog["文章列表"][i]["标签"].length === 0) {

      } else {
        document.querySelector("#article-item-sub-" + i).innerHTML += `
        <i class="fa fa-tags"></i> ${langdata["TAGS"][lang_name]}
                `;

        for (let k = 0; k < blog["文章列表"][i]["标签"].length; k++) {
          document.querySelector("#article-item-sub-" + i).innerHTML += `
                    <button class="btn btn-light btn-sm">${blog["文章列表"][i]["标签"][k]}</button>
                    `
        }
      }



      document.querySelector("#article-item-" + i).innerHTML += `
            <br /><p>${blog["文章列表"][i]["摘要"]}</p>
                `;
    }

    document.querySelector("#article-item-" + i).innerHTML += `
    
    <button class="fluentbtn fluentbtn-blue" onclick="edit_article('${blog["文章列表"][i]["文件名"]}')"><i class="fa fa-edit"></i> ${langdata["EDIT_ARTICLE_CONTENT"][lang_name]}</button>
    <button class="fluentbtn fluentbtn-blue" onclick="edit_article_meta(${i})"><i class="fa fa-info-circle"></i> ${langdata["EDIT_ARTICLE_META"][lang_name]}</button>
    <button class="fluentbtn" onclick="delete_article(${i})"><i class="fa fa-trash-o"></i> ${langdata["DELETE_ARTICLE"][lang_name]}</button>
    <br /><br />
    <button class="fluentbtn" onclick="let_article_up(${i})">上移一格</button>
    <button class="fluentbtn" onclick="let_article_down(${i})">下移一格</button>
    `

  }
}
