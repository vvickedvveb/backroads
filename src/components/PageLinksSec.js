import { PageLinks } from "../data/data";
import PageLink from "./PageLink";

export default function PageLinksSec({ parentClass, itemClass }) {
  return (
    <>
      <ul className={parentClass} id="nav-links">
        {PageLinks.map((pageLink) => {
          return (
            <PageLink
              key={pageLink.id}
              pageLink={pageLink}
              itemClass={itemClass}
            />
          );
        })}
      </ul>
    </>
  );
}
