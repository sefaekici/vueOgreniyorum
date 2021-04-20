//mixin oluşturma işlemi:mixinler kod tekrarını engellemek için kullanılırlar.

/*
1)Eğer mixinde componentte bulunan verilerle çakışan bir veri varsa 
component daha sonradan oluşturulduğu için componente ait olan veri mixini ezer.
2)Mixin birden fazla componentte tanımlansa da birinde olan değişiklik diğerini etkilemez
her seferinde her component için taze mixin oluştururlur.
*/

export const productMixin = {
  data() {
    return {
      products: [
        "Monitör",
        "Klavye",
        "Masa",
        "Sandayle",
        "Kitap",
        "Şişe",
        "Harddisk",
      ],
      searchText: "",
    };
  },
  computed: {
    filterTheList() {
      return this.products.filter((element) => {
        return element.toUpperCase().match(this.searchText.toUpperCase());
      });
    },
  },
};
