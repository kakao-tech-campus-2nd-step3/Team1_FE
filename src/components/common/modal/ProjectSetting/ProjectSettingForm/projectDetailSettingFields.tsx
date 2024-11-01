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
  const { control } = useFormContext<ProjectDetail>();

  return (
    <Stack spacing={4}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <TextField
            ref={ref}
            label="프로젝트명"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="startDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateField label="시작일" onChange={onChange} selected={value} />
        )}
      />
      <Controller
        name="endDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateField label="마감일" onChange={onChange} selected={value} />
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
