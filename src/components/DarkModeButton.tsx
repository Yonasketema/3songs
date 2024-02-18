import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { toggle } from "../state/themeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import IconBox from "./IconBox";

function DarkModeButton() {
  const dispatch = useDispatch<AppDispatch>();

  const isDarkMode = useSelector((state: RootState) => state.themes.dark_mode);

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <IconBox onClick={() => dispatch(toggle())}>
      {isDarkMode ? <HiOutlineSun size={21} /> : <HiOutlineMoon size={21} />}
    </IconBox>
  );
}

export default DarkModeButton;
