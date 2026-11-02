import { cn } from "@/lib/utils"
import { defineComponent, h } from "vue"

export const Skeleton = defineComponent({
  name: "Skeleton",
  setup(_, { attrs }) {
    return () =>
      h("div", { class: cn("animate-pulse rounded-md bg-muted", attrs.class), ...attrs })
  },
})
