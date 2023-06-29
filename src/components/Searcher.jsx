const Searcher = () => {
  return (
    <form className=" mt-10 border-2 p-1 px-2 ">
      <input placeholder="busca tu pokemon" type="text" />
      <button className=" border-l-2 pl-2" type="submit">
        🔍
      </button>
    </form>
  );
};

export { Searcher };
