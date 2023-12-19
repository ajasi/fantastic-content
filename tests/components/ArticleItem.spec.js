import { mount } from "@vue/test-utils";
import ArticleItem from "../../src/components/ArticleItem.vue";

describe("ArticleItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ArticleItem, {
      props: {
        article: {
          title: "Sample Article",
          publishDate: "2023-12-20T12:00:00.000Z",
          url: "/articles/sample.html",
        },
      },
    });
  });

  it('properly validates the "article" prop', () => {
    const { article } = wrapper.vm.$options.props;
    expect(article.type).toBe(Object);
    expect(article.required).toBe(true);
  });

  it("renders article title and publication date correctly", () => {
    expect(wrapper.find(".article-link a").text()).toBe("Sample Article");
    expect(wrapper.find(".publish-date").text()).toBe("December 20");
  });

  it("formats the date correctly", () => {
    const formattedDate = wrapper.vm.formatDate("2023-12-20T12:00:00.000Z");
    expect(formattedDate).toBe("December 20");
  });
});
