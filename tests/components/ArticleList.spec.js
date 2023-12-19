import { mount } from "@vue/test-utils";
import ArticleList from "../../src/components/ArticleList.vue";

describe("ArticleList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ArticleList, {
      global: {
        mocks: {
          window: {
            LATEST_ARTICLES: [
              {
                title: "Find new ways to travel north",
                publishDate: "2023-06-03T13:51:50.417Z",
                category: "news",
                url: "/articles/4738.html",
              },
              {
                title:
                  "When will it become possible to use time travel in order to fix your earlier mistakes?",
                publishDate: "2023-06-01T12:18:10.317Z",
                category: "essay",
                url: "/articles/7256.html",
              },
              {
                title: "10 ways to write better text",
                publishDate: "2023-06-03T09:00:32.200Z",
                category: "news",
                url: "/articles/7247.html",
              },
              {
                title: "Announcement: we have a new website category",
                publishDate: "2023-05-30T17:12:13.102Z",
                category: "news",
                url: "/articles/1749.html",
              },
              {
                title: "Weekly news",
                publishDate: "2023-05-29T00:23:15.276Z",
                category: "news",
                url: "/articles/1538.html",
              },
              {
                title: "In-depth travel guide for Tanzania",
                publishDate: "2023-05-31T11:12:43.003Z",
                category: "essay",
                url: "/articles/2594.html",
              },
            ],
          },
        },
      },
    });
  });

  it("filters articles correctly", async () => {
    await wrapper.find('input[value="news"]').trigger("click");
    expect(
      wrapper.vm.filteredArticles.every(
        (article) => article.category === "news"
      )
    ).toBe(true);

    await wrapper.find('input[value="essay"]').trigger("click");
    expect(
      wrapper.vm.filteredArticles.every(
        (article) => article.category === "essay"
      )
    ).toBe(true);
  });

  it("sorts articles correctly", () => {
    const sortedArticles = [...wrapper.vm.filteredArticles].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );
    expect(wrapper.vm.filteredArticles).toEqual(sortedArticles);
  });
});
