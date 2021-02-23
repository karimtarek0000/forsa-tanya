<template>
  <div class="pagination">
    <!-- 1) - PAGINATION BTN PREV -->
    <div
      v-if="statusPrev"
      class="pagination__btn pagination__btn--prev"
      @click="prevBtn"
    >
      <slot name="prev">prev</slot>
    </div>
    <!-- 2) - PAGINATION PAGINATOR -->
    <ul class="pagination__paginator">
      <!--  -->
      <li
        v-if="hasFirstPage"
        class="pagination__paginator__pagi"
        @click="getNumPage(1)"
      >
        {{ 1 | convertNumber }}
      </li>
      <li
        v-if="hasFirstPage"
        class="pagination__paginator__pagi pagination__paginator__pagi--spread"
      >
        ...
      </li>
      <!--  -->
      <ul class="pagination__paginator__sub">
        <li
          v-for="(page, index) in createPages"
          :key="index + 1"
          :class="[
            'pagination__paginator__pagi',
            { 'pagination__paginator__pagi--active': currentPage == page },
          ]"
          @click="getNumPage(page)"
        >
          {{ page | convertNumber }}
        </li>
      </ul>
      <!--  -->
      <li
        v-if="hasLastPage"
        class="pagination__paginator__pagi pagination__paginator__pagi--spread"
      >
        ...
      </li>
      <li
        v-if="hasLastPage"
        class="pagination__paginator__pagi"
        @click="getNumPage(totalPages)"
      >
        {{ totalPages | convertNumber }}
      </li>
    </ul>
    <!-- 3) - PAGINATION BTN NEXT -->
    <div
      v-if="statusNext"
      class="pagination__btn pagination__btn--next"
      @click="nextBtn"
    >
      <slot name="next">next</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  filters: {
    convertNumber(value) {
      // 1) - Get dir document
      const getDir = document.dir
      let typeLocalString = null
      // 2) - Change type locale string
      if (getDir === 'rtl') {
        typeLocalString = 'ar-EG'
      } else {
        typeLocalString = 'en-US'
      }
      // 3) - Return
      return value.toLocaleString(typeLocalString)
    },
  },
  props: {
    currentPage: {
      type: [String, Number],
      default: 1,
    },
    pageRang: {
      type: Number,
      default: 2,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      getPageRang: this.pageRang,
    }
  },
  computed: {
    // 1) - CONVERT CURRENT TO NUMBER
    convertCurrentToNumber() {
      return +this.currentPage
    },
    // 2) - COUNT PAGES
    createPages() {
      // 1) - Storage all pages
      const pages = []
      // 2) - Will be loop range from range start to range end
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      // 3) - Return pages
      return pages
    },
    // RANGE START
    rangeStart() {
      //
      const start = this.convertCurrentToNumber - this.getPageRang
      //
      return start > 0 ? start : 1
    },
    // RANGE END
    rangeEnd() {
      //
      const end = this.convertCurrentToNumber + this.getPageRang
      //
      return end < this.totalPages ? end : this.totalPages
    },
    // HAS FIRST PAGE
    hasFirstPage() {
      return this.rangeStart !== 1 && process.client && window.innerWidth > 600
    },
    // HAS LAST PAGE
    hasLastPage() {
      return (
        this.rangeEnd < this.totalPages &&
        process.client &&
        window.innerWidth > 600
      )
    },
    // STATUS NEXT
    statusNext() {
      return this.convertCurrentToNumber < this.totalPages
    },
    // STATUS PREV
    statusPrev() {
      return this.convertCurrentToNumber > 1
    },
    // TOTAL PAGES
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
  },
  mounted() {
    if (window.innerWidth <= 600) this.getPageRang = 1
  },
  methods: {
    // NEXT BTN
    nextBtn() {
      return this.getNumPage(this.convertCurrentToNumber + 1)
    },
    // PREV BTN
    prevBtn() {
      return this.getNumPage(this.convertCurrentToNumber - 1)
    },
    // GET NUM PAGE
    getNumPage(page) {
      return this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
/////////////////////////////////
/// Maps
// 1
$background_pagination: (
  pagi: #30a08b,
  nextAndPrev: #f5f5f5,
);

// 2
$text-color_pagination: (
  nuActive: black,
  active: white,
);

/////////////////////////////////
/// Global classes
// 1
%global_pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
}

// 2
%global_pagination_width {
  width: 48px;
  height: 44px;

  // Responsive
  @media (max-width: 900px) {
    width: 40px;
    height: 35px;
  }
}

/////////////////////////////////
// PAGINATION
.pagination {
  display: flex;
  justify-content: center;
  margin: 15px auto;
  max-width: 100%;
  //
  & ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  // PAGINATOR
  &__paginator {
    list-style: none;
    font-size: 1.6rem;

    // PAGI
    &__pagi {
      @extend %global_pagination;
      @extend %global_pagination_width;
      background-color: transparent;
      color: map-get($text-color_pagination, unActive);
      font-weight: 300;
      transition: all 0.2s ease;
      font-size: 19px;

      ///////////////////////////
      // Responsive
      @media (max-width: 900px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }

      // AND NEW PROPERTY ACTIVE
      &--active {
        background-color: map-get($background_pagination, pagi);
        font-weight: 400;
        color: map-get($text-color_pagination, active);
      }

      // ACTIVE AND HOVER
      &:hover {
        //
        @media (hover: hover) {
          background-color: darken(map-get($background_pagination, pagi), 10%);
          color: map-get($text-color_pagination, active);
        }
      }

      // SPREAD
      &--spread {
        @extend %global_pagination_width;
        color: map-get($text-color_pagination, unActive);
        cursor: default;

        // HOVER
        &:hover {
          //
          @media (hover: hover) {
            background-color: transparent;
            color: currentColor;
            box-shadow: none;
          }
        }
      }
    }

    // SUB
    &__sub {
      // NOT FIRST OF TYPE
      & li {
        margin-left: 10px;

        // Responsive
        @media (max-width: 900px) {
          margin-left: 5px;
        }
      }
    }
  }

  // BTN PREV
  &__btn--prev {
  }

  // BTN NEXT
  &__btn--next {
  }

  // BTN PREV AND BTN NEXT
  &__btn {
    @extend %global_pagination;
    padding: 0 10px;
    margin: 0 10px;
    background-color: map-get($background_pagination, nextAndPrev);
    text-transform: capitalize;
    transition: all 0.3s;

    // Responsive
    @media (max-width: 900px) {
      margin: 0 5px;
    }

    // HOVER
    &:hover {
      //
      @media (hover: hover) {
        background-color: darken(
          map-get($background_pagination, nextAndPrev),
          10%
        );
        color: map-get($text-color_pagination, unActive);
      }
    }
  }
}

//
html[dir='rtl'] {
  //
  .pagination__btn {
    transform: scaleX(-1);
  }
}
</style>
