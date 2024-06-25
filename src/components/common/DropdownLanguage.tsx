import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import en from "../../assets/en.jpg";
import vi from "../../assets/vi.png";
import { handleSetLocalStorage } from "../../helper/Xfunction";
import { useRecoilState } from "recoil";
import { languageState } from "../../store/language.store";
import withTranslation from "../../hocs/withTranslation";
import { LANGUAGE } from "../../utils/constant";

const DropdownLanguage = ({ i18n }: any) => {
  const [language, setLanguage] = useRecoilState(languageState);

  const [selectedKeys, setSelectedKeys] = useState({
    key: language == LANGUAGE.VI ? LANGUAGE.VI : LANGUAGE.EN,
    label: language == LANGUAGE.VI ? "VI" : "EN",
    flag: language == LANGUAGE.VI ? vi : en,
  });

  const selectedValue = useMemo(() => {
    return (
      <div className="flex items-center gap-2">
        <img
          className="w-[30px] h-[20px] object-contain"
          src={selectedKeys.flag}
          alt={selectedKeys.label}
        />
        <span>{selectedKeys.label}</span>
      </div>
    );
  }, [selectedKeys]);

  const handleSelectionChange = (keys: any) => {
    const selectedKey = Array.from(keys)[0];
    if (selectedKey === LANGUAGE.VI) {
      setSelectedKeys({ key: LANGUAGE.VI, label: "VI", flag: vi });
      handleSetLocalStorage(LANGUAGE.KEY, LANGUAGE.VI);
      i18n.changeLanguage(LANGUAGE.VI);
      setLanguage(LANGUAGE.VI);
    } else if (selectedKey === LANGUAGE.EN) {
      setSelectedKeys({ key: LANGUAGE.EN, label: "EN", flag: en });
      handleSetLocalStorage(LANGUAGE.KEY, LANGUAGE.EN);
      i18n.changeLanguage(LANGUAGE.EN);
      setLanguage(LANGUAGE.EN);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([selectedKeys.key])}
        onSelectionChange={handleSelectionChange}
        className="flex items-center gap-10"
      >
        <DropdownItem key={LANGUAGE.VI}>
          <div className="flex items-center w-full gap-20">
            <img
              className="w-[30px] h-[20px] object-contain"
              src={vi}
              alt="Vietnamese flag"
            />
            <span>VI (Việt Nam)</span>
          </div>
        </DropdownItem>
        <DropdownItem key={LANGUAGE.EN}>
          <div className="flex items-center w-full gap-20">
            <img
              className="w-[30px] h-[20px] object-contain"
              src={en}
              alt="English flag"
            />
            <span>EN (English)</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default withTranslation(DropdownLanguage);
