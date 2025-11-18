import { toast } from "react-toastify";

export function checkingPasswords(passOne: string, passTwo: string): boolean {
  if (passOne !== passTwo) {
    toast("Пароли не совпадают");
    return false;
  }
  return true;
}
