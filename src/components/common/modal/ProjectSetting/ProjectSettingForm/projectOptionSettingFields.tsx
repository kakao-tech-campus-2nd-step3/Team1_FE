import { VStack } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

import type { ProjectDetail } from "@/api/generated/data-contracts";

import { SwitchField } from "../../../../common/Fields/switchField";

const options = [
  {
    id: 1,
    title: "진행률에 따른 나무 성장!",
    description: "진행률이 오를수록 나무가 성장해요.",
    fieldId: "treeGrowth",
  },
  {
    id: 2,
    title: "진행률에 따른 빵빠레!",
    description: "진행률이 50% 달성될 때 메인 화면에 빵빠레가 울려요!",
    fieldId: "celebration",
  },
  {
    id: 3,
    title: "마감 기한에 따른 색 변화!",
    description: "마감 기한이 1일 남았을 때 아이콘이 빨간색으로 바뀌어요!",
    fieldId: "colorChange",
  },
  {
    id: 4,
    title: "이메일 전송!",
    description: "마감기한이 3일 남았을 때 하루 간격으로 이메일이 전송돼요!",
    fieldId: "emailSend",
  },
];

export const ProjectOptionSettingFields = () => {
  const { control, watch } = useFormContext<ProjectDetail>();
  const optionIds = watch("optionIds") || [];

  return (
    <VStack spacing={6}>
      {options.map((option) => (
        <Controller
          key={option.id}
          name="optionIds"
          control={control}
          render={({ field }) => {
            const isChecked = optionIds.includes(option.id);

            return (
              <SwitchField
                title={option.title}
                description={option.description}
                id={option.fieldId}
                isChecked={isChecked}
                onChange={(e) => {
                  const updatedOptionIds = e.target.checked
                    ? [...optionIds, option.id]
                    : optionIds.filter((id) => id !== option.id);
                  field.onChange(updatedOptionIds);
                }}
              />
            );
          }}
        />
      ))}
    </VStack>
  );
};
