const { copyFileSync, rmSync, constants } = require("fs");

module.exports = function () {
  save_blog_settings();
  if (
    blog["是否使用第三方主题"] === true &&
    blog["全局主题设置"]["第三方主题版本"] === "v2"
  ) {
    // 正在使用第三方主题，并且是v2版本的
    if (
      blog["全局主题设置"]["第三方主题文件内容"] !== undefined &&
      blog["全局主题设置"]["第三方主题文件内容"] !== null &&
      blog["全局主题设置"]["第三方主题文件内容"] !== [] &&
      blog["全局主题设置"]["第三方主题文件内容"] !== ""
    ) {
      // 确保有东西可删
      for (i in blog["全局主题设置"]["第三方主题文件内容"]) {
        rmSync(`${rootDir}/${blog["全局主题设置"]["第三方主题文件内容"][i]}`);
      }
    }
  } else {
    // 正在使用v1版本的第三方主题或者没有在使用第三方主题
    rmSync(`${rootDir}/index.html`);
  }
  copyFileSync(
    `${__dirname}/blog_source/index.html`,
    `${rootDir}/index.html`,
    constants.COPYFILE_EXCL
  );
  blog["全局主题设置"]["是否使用第三方主题"] = false;
  blog["全局主题设置"]["若使用第三方主题，是否来自本地文件"] = false;
  blog["全局主题设置"]["若使用来自主题商店的第三方主题，则主题名为"] = "";
  blog["全局主题设置"][
    "若使用来自主题商店的第三方主题，则主题的更新发布日期为"
  ] = "";
  // cleanup in index.json
  blog["全局主题设置"]["第三方主题版本"] = "";
  blog["全局主题设置"]["第三方主题文件内容"] = [];
  BlogInstance.writeBlogData();
  window.alert("已经将此站点的主题重置为默认的官方主题");
  window.location.reload();
};
