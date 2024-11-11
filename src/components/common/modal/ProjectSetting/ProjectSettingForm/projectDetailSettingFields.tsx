import { Stack } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

import type { ProjectDetail } from "@/api/generated/data-contracts";

import { DateField } from "../../../../common/Fields/dateField";
import { TextField } from "../../../../common/Fields/textField";
import { ToggleButtonGroup } from "../toggleButtonGroup";

type Props = {
  selectedFeature: string;
  setSelectedFeature: (feature: string) => void;
};

export const ProjectDetailSettingFields = ({
  selectedFeature,
  setSelectedFeature,
}: Props) => {
  const { control, watch } = useFormContext<ProjectDetail>();

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (
    <Stack>
      <Controller
        name="name"
        control={control}
        defaultValue="name"
        rules={{
          required: "이름은 필수 입력 사항입니다.",
          maxLength: {
            value: 15,
            message: "이름은 공백 포함 최대 15글자까지 가능합니다.",
          },
        }}
        render={({ field, fieldState: { error, invalid } }) => (
          <TextField
            label="프로젝트명"
            {...field}
            maxLength={20}
            isInvalid={invalid}
            errorMessage={error?.message}
            autoComplete="name"
          />
        )}
      />
      <Controller
        name="startDate"
        control={control}
        rules={{
          required: "시작일은 필수 입력 사항입니다.",
          validate: (value) => {
            if (value && endDate) {
              const start = new Date(value);
              const end = new Date(endDate);

              return start < end || "시작일은 종료일 이전이어야 합니다.";
            }
            return true;
          },
        }}
        render={({ field, fieldState: { error, invalid } }) => (
          <DateField
            label="시작일"
            {...field}
            isInvalid={invalid}
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        name="endDate"
        control={control}
        rules={{
          required: "종료일은 필수 입력 사항입니다.",
          validate: (value) => {
            if (!value) return "종료일은 필수 입력 사항입니다.";

            if (startDate) {
              const start = new Date(startDate);
              const end = new Date(value);

              if (end <= start) {
                return "종료일은 시작일 이후여야 합니다.";
              }

              const oneDayInMillis = 24 * 60 * 60 * 1000;
              if (end.getTime() - start.getTime() < oneDayInMillis) {
                return "시작일과 마감일 간격은 1일 이상이어야 합니다.";
              }
            }

            return true;
          },
        }}
        render={({ field, fieldState: { error, invalid } }) => (
          <DateField
            label="종료일"
            {...field}
            isInvalid={invalid}
            errorMessage={error?.message}
          />
        )}
      />
      <ToggleButtonGroup
        id="projectOption"
        label="기능 설정"
        options={["기본", "사용자 설정"]}
        selectedOption={selectedFeature}
        onChange={setSelectedFeature}
      />
    </Stack>
  );
};
