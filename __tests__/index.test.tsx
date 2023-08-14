import Home from '@/pages/index'

beforeEach(() => {
});
afterEach(() => {
});
beforeAll(() => {
});
afterAll(() => {
});

const sum = (a: number, b: number): number => {
  return a + b;
};

const captalizeWord = (word : string) => {
  const firstLetter = word[0].toUpperCase();
  const othersLetters = word.substring(1);
  return `${firstLetter}${othersLetters}`
};

const captalize = (text: string) => {
  if (text.length === 0){
    return '';
  }

  // const words = text.split(" ");
  // // return words.map(word => captalizeWord(word)).join(" ");
  // // Como recebe e retorna word então pode ser escrito assim
  // return words.map(captalizeWord).join(" ");

  //Outra forma
  return text.split(" ").map(captalizeWord).join(" ");
};

describe("Simple operation", () => {

  test("should return 4 to 2 + 2", () => {
    expect(sum(2, 2)).toBe(4);
  });

})
  
describe("Sanity of formatter", () => {
  test("Should do nothing for empty entry", () => {
    expect(captalize("")).toBe("");
  });

  test("Should return Almada to almada", () => {
    expect(captalize("almada")).toBe("Almada");
  });

  test("Should return Luiz Almada to luiz almada", () => {
    expect(captalize("luiz almada")).toBe("Luiz Almada");
  });
});















// import { render, screen } from '@testing-library/react'
// import Home from '@/pages/index'

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />)

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// })
