import { defineStore } from "pinia";

interface Question {
  id: number;
  text: string;
}

interface Block {
  id: number;
  title: string;
  questions: Question[];
}

interface Answers {
  [key: string]: number;
}

export const useScreeningStore = defineStore("screening", {
  state: () => ({
    // текущий блок
    currentBlock: 0,

    // ответы
    answers: {} as Answers,

    // блоки вопросов
    blocks: [
      {
        id: 1,

        title: "Энергия и физическое состояние",

        questions: [
          {
            id: 101,
            text: "Насколько плохое у тебя общее физическое состояние?",
          },

          {
            id: 102,
            text: "Насколько низкий у тебя уровень энергии в течение дня?",
          },

          {
            id: 103,
            text: "Насколько у тебя сидячий образ жизни?",
          },

          {
            id: 104,
            text: "Насколько сильная физическая усталость к концу рабочего дня?",
          },

          {
            id: 105,
            text: "Насколько выражены боли в спине, шее или плечах?",
          },

          {
            id: 106,
            text: "Насколько низкий у тебя уровень силы и выносливости?",
          },

          {
            id: 107,
            text: "Насколько выражена скованность/зажатость в теле?",
          },

          {
            id: 108,
            text: "Насколько долго ты восстанавливаешься после нагрузки?",
          },

          {
            id: 109,
            text: "Насколько ты недоволен своей физической формой?",
          },
        ],
      },

      {
        id: 2,

        title: "Питание и пищевые привычки",

        questions: [
          {
            id: 201,
            text: "Насколько плохое качество твоего питания?",
          },

          {
            id: 202,
            text: "Насколько нестабилен твой режим питания?",
          },

          {
            id: 203,
            text: "Насколько ты склонен к перееданию?",
          },

          {
            id: 204,
            text: "Насколько выражены перепады энергии после еды?",
          },

          {
            id: 205,
            text: "Насколько часто ты ешь “на автомате” без контроля?",
          },

          {
            id: 206,
            text: "Насколько часто ты забываешь пить воду в течение дня?",
          },

          {
            id: 207,
            text: "Насколько выражена зависимость от сладкого или фастфуда?",
          },

          {
            id: 208,
            text: "Насколько неосознанно ты питаешься?",
          },

          {
            id: 209,
            text: "Насколько часто ты ешь в состоянии стресса или усталости?",
          },
        ],
      },

      {
        id: 3,

        title: "Психологическое состояние и поведение",

        questions: [
          {
            id: 301,
            text: "Насколько высокий уровень стресса в твоей жизни?",
          },

          {
            id: 302,
            text: "Насколько тебе тяжело соблюдать дисциплину и постоянство?",
          },

          {
            id: 303,
            text: "Насколько часто ты откладываешь важные действия?",
          },

          {
            id: 304,
            text: "Насколько сильно ощущение “нет времени на себя”?",
          },

          {
            id: 305,
            text: "Насколько ты склонен быстро “сходить с дистанции”?",
          },

          {
            id: 306,
            text: "Насколько сложно тебе засыпать?",
          },

          {
            id: 307,
            text: "Насколько нестабилен твой режим сна?",
          },

          {
            id: 308,
            text: "Насколько плохое качество твоего сна?",
          },

          {
            id: 309,
            text: "Насколько тебе сложно контролировать свои привычки и состояние?",
          },
        ],
      },
    ] as Block[],
  }),

  getters: {
    // текущий блок
    currentBlockData: (state) => {
      return state.blocks[state.currentBlock];
    },

    // прогресс блоков
    progress(state): number {
      return (state.currentBlock + 1) / state.blocks.length;
    },
  },

  actions: {
    // ответ на вопрос
    setAnswer(questionId: number, value: number) {
      this.answers[questionId] = value;
    },

    // получить ответ
    getAnswer(questionId: number) {
      return this.answers[questionId];
    },

    // проверка заполнения блока
    validateCurrentBlock(): boolean {
      const questions = this.currentBlockData.questions;

      return questions.every((question) => this.answers[question.id]);
    },

    // следующий блок
    nextBlock() {
      if (this.currentBlock < this.blocks.length - 1) {
        this.currentBlock++;
      }
    },

    // проверка последнего блока
    isLastBlock(): boolean {
      return this.currentBlock === this.blocks.length - 1;
    },

    // общий score
    calculateScore(): number {
      return Object.values(this.answers).reduce((acc, value) => acc + value, 0);
    },

    // reset
    resetScreening() {
      this.currentBlock = 0;

      this.answers = {};
    },
  },
});
