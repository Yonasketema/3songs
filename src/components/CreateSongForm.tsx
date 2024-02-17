import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateSongForm() {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="title">Song title</Label>
        <Input type="text" id="title" />
      </FormRow>

      <FormRow>
        <Label htmlFor="artist">Artist</Label>
        <Input type="text" id="artist" />
      </FormRow>

      <FormRow>
        <Label htmlFor="album">Album</Label>
        <Input type="text" id="album" />
      </FormRow>

      <FormRow>
        <Label htmlFor="genre">Genre</Label>
        <Input type="text" id="genre" />
      </FormRow>

      <FormRow>
        <button type="reset">Cancel</button>
        <button>ADD Song</button>
      </FormRow>
    </Form>
  );
}

export default CreateSongForm;
