<template>
  <main ref="windowSize">
    <section id="clouds">
      <header>
        <img
          src="../assets/bydpng.png"
          alt="Beyond the Dream of that Day Logo"
        />
        <h1>
          T1 - 24
          <span style="color: var(--clr-haruka);">510 </span>
          <span style="color: var(--clr-hokke);">1712</span>
        </h1>
        <button
          type="button"
          class="go-to-content-btn"
          @click.prevent="scrollTo(scrollToElement)"
        >
          <chevron-down />
        </button>
      </header>
      <article ref="scrollToElement">
        <div class="dropdown-containers">
          <h1>
            I know that people are probably going to scroll to their own messages, so feel free to click on the dropdowns to go to the messages :kohanewonder:
          </h1>
          <div class="scroll-to-btn-container">
            <button
              class="scroll-to-btn"
              @click="scrollToName('managers')"
            >
              Managers/Monitors
            </button>
            <button
              class="scroll-to-btn"
              @click="scrollToName('fillers')"
            >
              Fillers
            </button>
            <button
              class="scroll-to-btn"
              @click="scrollToName('runners')"
            >
              Runners
            </button>
          </div>
        </div>
        <line-break />
        <my-thanks />
        <line-break id="managers"/>
        <h1>{{ managers.to }}</h1>
        <template
          v-for="(message) in managers.messages"
          :key="message.name"
        >
          <individual-thanks
            :name="message.name"
            :message="message.letter"
          />
        </template>
        <line-break id="fillers"/>
        <h1>{{ fillers.to }}</h1>
        <template
          v-for="(message) in fillers.messages"
          :key="message.name"
        >
          <individual-thanks
            :name="message.name"
            :message="message.letter"
          />
        </template>
        <line-break id="runners" />
        <h1>{{ runners.to }}</h1>
        <template
          v-for="(message) in runners.messages"
          :key="message.name"
        >
          <individual-thanks
            :name="message.name"
            :message="message.letter"
          />
        </template>
        <line-break />
        <footer>
          <h1>Ending Notes:</h1>
          <p>
            I am going to say this again, as someone who has done a podium TWICE in one year, PLEASE DO NOT TIER A PODIUM. It is definitely not good for you, nor are people able to stay up this long without taking a rest. I think I got an average of around two hours of rest per day during the event, and I definitely do not want to experience that again. It is also a lot of money, time, and investment into your own accounts. I’ve been playing from the start, and developed my account quite a bit. I’m glad that I am retired now, but a podium isn’t worth it if you are sacrificing so many things in your current life for a pretty PNG. 
          </p>
          <p>So... Future plans?</p>
          <p>
            At the moment, no. I do plan on T100 a lot of events this year, so feel free to reach out if you think I'll T100 an event! I'm definitely running for T100 MMJ World Link whenver it comes to EN, as well as T100 the Toya chapter for VBS World Link on EN! Feel free to reach out if people want to tier or fill for me then!
          </p>
          <h1>Signing out, Yassie</h1>
        </footer>
      </article>
      <button class="toTop" @click.prevent="scrollTo(scrollToElement)">
        Top
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import managers from '@/thankyous/managers';
import fillers from '@/thankyous/fillers';
import runners from '@/thankyous/runners';
import MyThanks from '@/components/MyThanks.vue';
import ChevronDown from '@/components/svg/ChevronDown.vue';
import IndividualThanks from '@/components/IndividualThanks.vue';
import LineBreak from '@/components/LineBreak.vue';

const scrollToElement = ref<HTMLElement | null>(null);

function scrollTo(view: HTMLElement | null) { 
  view?.scrollIntoView({ behavior: 'smooth' }) 
}

function scrollToName(name: string) {
  document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px 0px var(--text-shadow);
  gap: 24px;
}

#clouds{
  position: relative;
  height: 100%;
  width: 100%;
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png);
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png) 0 200px,
              url(https://static.radulescu.me/examples/clouds/clouds1200_1.png) 0 300px,
              url(https://static.radulescu.me/examples/clouds/clouds1000_blur3.png) 100px 250px;
	animation: wind 20s linear infinite;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

#clouds::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-bg-tint);
  z-index: 50;
}

header, article {
  position: relative;
  z-index: 99;
  width: 100%;
  text-align: center;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  margin: 16px;
  font-size: 36px;
}

.go-to-content-btn {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
  position: absolute;
  bottom: 0;

  svg {
    height: 100%;
    width: auto;
    color: var(--color-text);
  }
}

hr {
  border: 0;
  border-bottom: 5px solid var(--color-text);
  width: 0;
  animation: separator-width 1s ease-out forwards;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;

  h2 {
    font-size: 30px;
  }
}

.dropdown-containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  padding-bottom: 20px;
}

.scroll-to-btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-to-btn {
  width: fit-content;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  background-color: var(--dropdown-bg);
  border: none;
  border-radius: 8px;
  color: var(--color-text);
  transition: background-color 0.35s linear;
  font-family: 'Ubuntu', sans-serif;
}

.scroll-to-btn:hover {
  background-color: var(--goto-btn-hover);
  color: var(--goto-text-hover);
}

button {
  cursor: pointer;
}

.go-to-content-btn:hover {
  transition: all 0.1s linear;

  svg {
    color: var(--text-shadow);
    transition: all 0.1s linear;
  }
}

footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 70%;
  padding-bottom: 24px;

  p {
    font-size: 20px;
  }
}

.toTop {
  position: fixed;
  bottom: 8px;
  right: 8px;
  z-index: 99;
  border: none;
  background-color: var(--clr-hokke);
  color: var(--color-text);
  cursor: pointer;
  font-size: 16px;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.35s linear;
  width: fit-content;
  height: auto;
}

.toTop:hover {
  background-color: var(--clr-haruka);
  color: var(--text-shadow);
}

@media screen and (max-width: 750px) {
	img {
		max-width: 95vw;
	}

  footer {
    max-width: 90%;
  }

  .dropdown-containers {
    max-width: 90%; 
  }
}

@keyframes wind{
  0% {
    background-position: 0 200px, 0 300px, 100px 250px;
  }
  100% {
    background-position: 1000px 200px, 1200px 300px, 1100px 250px;
  }
}
</style>
