import {useUserStore} from "~/stores/user";
import {User} from "~/interface";
import {ofetch} from "ofetch";
import useStatefulCookie from "~/composables/useStatefulCookie";

export default defineNuxtPlugin(async (NuxtApp) => {
  const config = useRuntimeConfig()
  const getImagePath = (path: string) => {
    return `${config.public.apiBase}${path}`
  }
  return {
    provide: {
      getImagePath
    }
  }
})
