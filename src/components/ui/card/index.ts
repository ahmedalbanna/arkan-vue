import { cn } from "@/lib/utils"
import { defineComponent, h } from "vue"

export const Card = defineComponent({
  name: "Card",
  setup(_, { slots, attrs }) {
    return () =>
      h("div", { class: cn("rounded-lg border bg-card text-card-foreground shadow-sm", attrs.class), ...attrs }, slots.default?.())
  },
})

export const CardHeader = defineComponent({
  name: "CardHeader",
  setup(_, { slots, attrs }) {
    return () =>
      h("div", { class: cn("flex flex-col space-y-1.5 p-6", attrs.class), ...attrs }, slots.default?.())
  },
})

export const CardTitle = defineComponent({
  name: "CardTitle",
  setup(_, { slots, attrs }) {
    return () =>
      h("h3", { class: cn("text-2xl font-semibold leading-none tracking-tight", attrs.class), ...attrs }, slots.default?.())
  },
})

export const CardDescription = defineComponent({
  name: "CardDescription",
  setup(_, { slots, attrs }) {
    return () =>
      h("p", { class: cn("text-sm text-muted-foreground", attrs.class), ...attrs }, slots.default?.())
  },
})

export const CardContent = defineComponent({
  name: "CardContent",
  setup(_, { slots, attrs }) {
    return () =>
      h("div", { class: cn("p-6 pt-0", attrs.class), ...attrs }, slots.default?.())
  },
})

export const CardFooter = defineComponent({
  name: "CardFooter",
  setup(_, { slots, attrs }) {
    return () =>
      h("div", { class: cn("flex items-center p-6 pt-0", attrs.class), ...attrs }, slots.default?.())
  },
})
