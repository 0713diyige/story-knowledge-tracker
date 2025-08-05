(function () {
  const EXTENSION_ID = 'story-knowledge-tracker';
  const EXTENSION_NAME = '剧情知情人追踪器';

  const knowledgeTable = {
    "小明": ["告诉了小红他明天要去图书馆"],
    "小红": ["小明明天要去图书馆", "小李也会去"],
    "小李": ["小明明天要去图书馆", "自己也会去"]
  };

  // 渲染 tab 页的内容
  function renderUI() {
    let html = `<h2 style="font-size:1.2em">角色已知剧情表</h2>`;
    html += `<table border="1" cellpadding="5" style="border-collapse: collapse;"><tr><th>角色</th><th>已知剧情</th></tr>`;
    for (let name in knowledgeTable) {
      let info = knowledgeTable[name].join('<br>');
      html += `<tr><td>${name}</td><td>${info}</td></tr>`;
    }
    html += `</table><p style="margin-top:10px;">（目前为测试数据）</p>`;
    return html;
  }

  // 注册扩展
  registerExtension({
    name: EXTENSION_NAME,
    id: EXTENSION_ID,
    init() {
      console.log(`[${EXTENSION_NAME}] 插件已加载`);

      // 添加一个侧边栏标签页（最关键！）
      addTab({
        id: EXTENSION_ID,
        name: '剧情追踪',
        icon: '🧠',
        render: renderUI
      });
    }
  });
})();
