<script setup lang="ts">
import { animate, stagger } from "motion-v";
import { useIntersectionObserver } from "@vueuse/core";

const { isDesktop } = useUiState();

const EMAIL_TARGET = "info@avilamultisport.com";

const sending = ref(false);
const clientError = ref("");
const successMessage = ref("");

const formElement = ref<HTMLFormElement>();
const sectionEl = ref<HTMLElement>();

const nameError = ref("");
const lastnameError = ref("");
const emailError = ref("");
const phoneError = ref("");
const messageError = ref("");

const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9]{8,15}$/;
const MESSAGE_REGEX = /^[a-zA-ZÀ-ÿ0-9\s@\-+.,!?()]{0,256}$/;

function validateName(value: string): boolean {
  if (!value) {
    nameError.value = "El nombre es requerido";
    return false;
  }
  if (!NAME_REGEX.test(value)) {
    nameError.value =
      "El nombre solo debe contener letras y espacios (2-50 caracteres)";
    return false;
  }
  nameError.value = "";
  return true;
}

function validateLastname(value: string): boolean {
  if (!value) {
    lastnameError.value = "El apellido es requerido";
    return false;
  }
  if (!NAME_REGEX.test(value)) {
    lastnameError.value =
      "El apellido solo debe contener letras y espacios (2-50 caracteres)";
    return false;
  }
  lastnameError.value = "";
  return true;
}

function validateEmail(value: string): boolean {
  if (!value) {
    emailError.value = "El email es requerido";
    return false;
  }
  if (!EMAIL_REGEX.test(value)) {
    emailError.value = "Ingrese un email válido";
    return false;
  }
  emailError.value = "";
  return true;
}

function validatePhone(value: string): boolean {
  if (!value) {
    phoneError.value = "El teléfono es requerido";
    return false;
  }
  if (!PHONE_REGEX.test(value)) {
    phoneError.value = "Ingrese un número de teléfono válido (8-15 dígitos)";
    return false;
  }
  phoneError.value = "";
  return true;
}

function validateMessage(value: string): boolean {
  if (!value) {
    messageError.value = "El mensaje es requerido";
    return false;
  }
  if (!MESSAGE_REGEX.test(value)) {
    messageError.value =
      "El mensaje solo puede contener caracteres regulares (máx 256 caracteres)";
    return false;
  }
  messageError.value = "";
  return true;
}

function validateAllFields(formData: FormData): boolean {
  const name = formData.get("name") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const isNameValid = validateName(name);
  const isLastnameValid = validateLastname(lastname);
  const isEmailValid = validateEmail(email);
  const isPhoneValid = validatePhone(phone);
  const isMessageValid = validateMessage(message);

  return (
    isNameValid &&
    isLastnameValid &&
    isEmailValid &&
    isPhoneValid &&
    isMessageValid
  );
}

function clearFormErrors() {
  nameError.value = "";
  lastnameError.value = "";
  emailError.value = "";
  phoneError.value = "";
  messageError.value = "";
  clientError.value = "";
}

async function handleSubmit() {
  if (!formElement.value) return;

  sending.value = true;
  clientError.value = "";
  successMessage.value = "";

  const formData = new FormData(formElement.value);

  if (!validateAllFields(formData)) {
    clientError.value = "Por favor, corrige los errores en el formulario.";
    sending.value = false;
    return;
  }

  try {
    const body = new URLSearchParams(formData as any).toString();

    const response = await fetch("/contact-form-netlify.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      successMessage.value =
        "¡Formulario enviado con éxito! Gracias por contactarnos.";
      formElement.value.reset();
      clearFormErrors();
    } else {
      clientError.value = `Error al enviar el formulario (${response.status}). Inténtalo de nuevo.`;
    }
  } catch {
    clientError.value =
      "Hubo un problema al conectar con el servidor. Por favor, inténtalo más tarde.";
  } finally {
    sending.value = false;
  }
}

function onNameInput(e: Event) {
  validateName((e.target as HTMLInputElement).value);
}
function onLastnameInput(e: Event) {
  validateLastname((e.target as HTMLInputElement).value);
}
function onEmailInput(e: Event) {
  validateEmail((e.target as HTMLInputElement).value);
}
function onPhoneInput(e: Event) {
  validatePhone((e.target as HTMLInputElement).value);
}
function onMessageInput(e: Event) {
  validateMessage((e.target as HTMLTextAreaElement).value);
}

function isMobileDevice() {
  if (!import.meta.client) return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

const emailLink = computed(() => {
  const subject = encodeURIComponent(
    "CONTACTO DESDE FORMULARIO - AVILA MULTISPORT",
  );
  if (isMobileDevice()) {
    return `mailto:${EMAIL_TARGET}?subject=${subject}`;
  }
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}`;
});

function enterAnimation() {
  animate(
    [
      [
        "#contact",
        { opacity: [0, 1] },
        { duration: 0.5, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] },
      ],
      [
        "#contact > div",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            isDesktop.value
              ? "polygon(0 0, 100% 0, 100% 85.4%, 0% 91.23%)"
              : "polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)",
          ],
        },
        { duration: 0.5 },
      ],
      [
        "#contact > div > h3",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.5 },
      ],
      [
        "#contact > div > form > input",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: stagger(0.3) },
      ],
      [
        "#contact > div > form > textarea",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.1 },
      ],
      [
        "#contact > div > form > button",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.1 },
      ],
      [
        "#contact-email",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.2 },
      ],
    ] as any,
    { duration: 2.2 },
  );
}

function exitAnimation() {
  animate(
    "#contact",
    { opacity: [1, 0] },
    { duration: 0.5, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] },
  );
}

useIntersectionObserver(
  sectionEl,
  ([entry]) => {
    if (entry?.isIntersecting) enterAnimation();
    else exitAnimation();
  },
  { rootMargin: "-100px 0px -100px 0px" },
);
</script>

<template>
  <section
    id="contact"
    ref="sectionEl"
    data-color="light"
    data-copyright-color="dark"
    class="relative h-screen w-full snap-start snap-always"
  >
    <div
      class="h-[94vh] bg-color-1 p-8 pt-24 md:p-12 md:pt-[10.5rem] md:pr-16 lg:pl-16"
    >
      <h3 class="mb-2 text-2xl text-color-4 md:text-4xl">Contáctanos</h3>

      <form
        ref="formElement"
        class="flex flex-col gap-4 md:mt-4 md:gap-4"
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <p class="hidden">
          <label> No llenar si eres humano: <input name="bot-field" /> </label>
        </p>

        <div class="flex flex-col gap-4 lg:flex-row">
          <div class="w-full">
            <input
              required
              class="w-full px-3 py-2"
              type="text"
              name="name"
              placeholder="Nombre"
              :aria-invalid="nameError ? 'true' : undefined"
              :aria-describedby="nameError ? 'name-error-msg' : undefined"
              @input="onNameInput"
            />
            <p
              v-if="nameError"
              id="name-error-msg"
              class="mt-1 text-sm text-[#ef4444]"
            >
              {{ nameError }}
            </p>
          </div>
          <div class="w-full">
            <input
              required
              class="w-full px-3 py-2"
              type="text"
              name="lastname"
              placeholder="Apellido"
              :aria-invalid="lastnameError ? 'true' : undefined"
              :aria-describedby="
                lastnameError ? 'lastname-error-msg' : undefined
              "
              @input="onLastnameInput"
            />
            <p
              v-if="lastnameError"
              id="lastname-error-msg"
              class="mt-1 text-sm text-[#ef4444]"
            >
              {{ lastnameError }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4 lg:flex-row">
          <div class="w-full">
            <input
              required
              class="w-full px-3 py-2"
              type="email"
              name="email"
              placeholder="Email"
              :aria-invalid="emailError ? 'true' : undefined"
              :aria-describedby="emailError ? 'email-error-msg' : undefined"
              @input="onEmailInput"
            />
            <p
              v-if="emailError"
              id="email-error-msg"
              class="mt-1 text-sm text-[#ef4444]"
            >
              {{ emailError }}
            </p>
          </div>
          <div class="w-full">
            <input
              required
              class="w-full px-3 py-2"
              type="tel"
              name="phone"
              placeholder="Teléfono"
              :aria-invalid="phoneError ? 'true' : undefined"
              :aria-describedby="phoneError ? 'phone-error-msg' : undefined"
              @input="onPhoneInput"
            />
            <p
              v-if="phoneError"
              id="phone-error-msg"
              class="mt-1 text-sm text-[#ef4444]"
            >
              {{ phoneError }}
            </p>
          </div>
        </div>
        <div class="w-full">
          <textarea
            required
            class="w-full resize-none pt-3 pl-3"
            name="message"
            rows="4"
            placeholder="Mensaje"
            :aria-invalid="messageError ? 'true' : undefined"
            :aria-describedby="messageError ? 'message-error-msg' : undefined"
            @input="onMessageInput"
          />
        </div>

        <p
          v-if="messageError"
          id="message-error-msg"
          class="mt-1 text-sm text-[#ef4444]"
        >
          {{ messageError }}
        </p>

        <p
          v-if="clientError"
          class="rounded border border-[#f87171] bg-[#fecaca] py-1 pl-2 text-[#ef4444]"
        >
          {{ clientError }}
        </p>

        <p
          v-if="successMessage"
          class="rounded border border-[#22c55e] bg-[#bbf7d0] py-1 pl-2 text-[#15803d]"
        >
          {{ successMessage }}
        </p>

        <button class="self-start bg-color-3 px-12 py-2" :disabled="sending">
          {{ sending ? "Enviando..." : "Enviar" }}
        </button>
      </form>
      <p id="contact-email" class="mt-4 text-white">
        O contáctanos directamente
        <a
          :href="emailLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-color-4 hover:underline"
        >
          {{ EMAIL_TARGET }}
        </a>
      </p>
    </div>
  </section>
</template>
