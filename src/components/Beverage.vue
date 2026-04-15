<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <template #top>
        <Creamer v-if="hasCreamer" :creamer="creamer" />
      </template>

      <template #mid>
        <Syrup v-if="hasSyrup" :syrup="syrup" />
      </template>

      <template #bottom>
        <Base :base="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { computed } from "vue";

import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  base: any;
  creamer: any;
  syrup: any;
};

const props = defineProps<Props>();

const hasCreamer = computed(() => props.creamer?.id !== "c1");
const hasSyrup = computed(() => props.syrup?.id !== "s1");
</script>