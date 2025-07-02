const tabsWrappers = document.querySelectorAll(".tabs-wrapper");

if (tabsWrappers.length > 0) {
  tabsWrappers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll(".tab");
    const tabsContents = wrapper.querySelectorAll(".tab-content");
    tabsContents.forEach((content, index) => {
      content.classList.add("hidden");

      if (index === 0) {
        content.classList.remove("hidden");
      }
    });
    tabs.forEach((tab, index) => {
      if (index === 0) {
        tab.classList.add("active");
      }

      tab.addEventListener("click", () => {
        const activeTab = wrapper.querySelector(".tab.active");

        if (activeTab) {
          activeTab.classList.remove("active");
        }

        tab.classList.add("active");

        const tabData = tab.getAttribute("data-tab");
        const currentTabContent = Array.from(tabsContents).find((content) => {
          return content.getAttribute("data-tab") === tabData;
        });
        tabsContents.forEach((content) => {
          content.classList.add("hidden");
        });
        if (currentTabContent) {
          currentTabContent.classList.remove("hidden");
        }
      });
    });
  });
}
