import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function SearchBar() {
  return (
    <form>
      <MDBInputGroup>
        <MDBInput label="Search" />
        <MDBBtn rippleColor="dark">
          <MDBIcon icon="search" />
        </MDBBtn>
      </MDBInputGroup>
    </form>
  );
}
