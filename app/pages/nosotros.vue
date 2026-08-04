<script setup lang="ts">
import { about } from '~/utils/content'

interface Topic {
  title: string
  description: string
}

interface EnterpriseTopic {
  title: string
  content: Topic[]
}

const historyTopic = about.topics[0] as unknown as Topic
const philosophyTopic = about.topics[1] as unknown as Topic
const goalsInfo = about.topics[2] as unknown as EnterpriseTopic

useHead({ title: about.title })
</script>

<template>
  <div class="lg:flex lg:flex-row">
    <AboutHistory :topic="historyTopic" />
    <AboutHistoryImg />
  </div>
  <div class="lg:flex lg:flex-row">
    <AboutPhilosophy :topic="philosophyTopic" />
    <AboutPhilosophyImg />
  </div>
  <div class="lg:flex lg:flex-row">
    <AboutGoals :info="goalsInfo" />
    <AboutGoalsImg />
  </div>
</template>
