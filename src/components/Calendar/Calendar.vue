<template>
  <div class="calendar">
    <div>{{ calendarInfo.showDate }}</div>
    <ul class="calendar-weekdays">
      <li v-for="item in calendarInfo.weekdays" :key="item">{{ item }}</li>
    </ul>
    <ul class="calendar-days">
      <li v-for="item in calendarInfo.days" :key="item">
        {{ item.day === 0 ? "" : item.day }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import dayjs from "dayjs";
import Lodash from "lodash";

export default {
  name: "Calendar",
  components: {},
  setup() {
    const calendarInfo = reactive({
      showDate: "",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      days: []
    });
    const toDay = dayjs().format("YYYY-MM-DD");
    const toMonth = dayjs().format("YYYY-MM");
    onMounted(() => {
      getCalendarDays();
    });
    const getCalendarDays = (direction = "") => {
      const month = dayjs().format("YYYY-MM");
      const daysInMonth = dayjs(month).daysInMonth();
      if (month === toMonth) {
        calendarInfo.showDate = toDay;
      }
      if (!direction) {
        // 不存在方向则表示初始化
      } else if (direction === "pre") {
        // 上个月
      } else if (direction === "next") {
        // 下个月
      }
      let days = [];
      for (let i = 0; i <= daysInMonth; i++) {
        days.push({
          day: i,
          hasArticle: false
        });
      }
      const firstDayWeek = dayjs(`${month}-01`).day();
      const lastDayWeek = dayjs(`${month}-${daysInMonth}`).day();
      for (let i = 1; i < firstDayWeek; i++) {
        days.unshift({
          day: 0,
          hasArticle: false
        });
      }
      for (let i = 6; i > lastDayWeek; i--) {
        days.push({
          day: 0,
          hasArticle: false
        });
      }
      calendarInfo.days = Lodash.cloneDeep(days);
    };
    return {
      calendarInfo,
      toDay
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";
.calendar {
  position: relative;
  width: 100%;
  height: auto;
  color: $primary-color;
  background-color: $module-bg-opaque;
  .calendar-weekdays {
    position: relative;
    display: grid;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(7, 1fr);
  }
  .calendar-days {
    position: relative;
    display: grid;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
