import { Dribbble } from "icons/social";
import { FC, ReactNode, Ref, Suspense, use, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import s from "./s.module.css";
import DATA from "./data.json";
type Card = {
  name: string;
  username: string;
  avatar: string;
  provider: string;
};

async function getList(): Promise<{ data: Card[]; loading: boolean }> {
  let loading = false;
  const res = DATA as Card[];

  return { loading, data: res as Card[] };
}
const WIDTH_CARD = 240;
const HEIGHT_CARD = 118;
const SPACE_CARD = 24;
type Surface = {
  width: number;
  height: number;
  surface: number;
};
function calculateSurface(parent: HTMLDivElement): Surface {
  const width = parent.offsetWidth;
  const height = parent.offsetHeight;
  const surface = width * height;
  return { width, height, surface };
}
function calculateQuantityCards(surface: Surface): {
  quantity: number;
  surfaceCards: number;
} {
  const h = HEIGHT_CARD + SPACE_CARD * 2;
  const w = WIDTH_CARD + SPACE_CARD * 2;
  const s = h * w;
  const quantity = Math.round(surface.surface / s);
  return { quantity, surfaceCards: s };
}

/*
function positionElementOld(
  element: Element,
  avalaibleSpace: { top: number; left: number }
) {
  gsap.to(`#${element.id}`, {
    left: avalaibleSpace.left,
    top: avalaibleSpace.top,
    opacity: 1,
    duration: 0.3,
  });
}
*/
type Element = Surface & {
  coords: { x: number; y: number };
};

function random(parent: number, element: number): number {
  //const min = Math.ceil(parent - element) || 0;
  const min = 0;
  const max = Math.floor(parent);
  const result = Math.random() * (max - min + 1 + min);
  return result;
}
function calculatePosition(element: Element, surfaceParent: Surface): Element {
  const x = random(surfaceParent.width - element.width, element.width);
  const y = random(surfaceParent.height - element.height, element.height);

  return { ...element, coords: { x, y } };
}

let mounted = false;
const Cards: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const list = use(getList());
  useEffect(() => {
    if (!list.loading && ref.current && !mounted) {
      const cards = ref.current.children;
      const surface = calculateSurface(ref.current);
      const surfaceResult = {
        ...surface,
        surface: surface.surface - (surface.surface * 50) / 100,
      };
      const qCards = calculateQuantityCards(surfaceResult);
      console.log({ surface, qCards, surfaceResult });
      for (let i = 0; i < qCards.quantity; i++) {
        if (cards[i]) {
          const e = cards[i];
          const position = calculatePosition(
            {
              height: HEIGHT_CARD,
              width: WIDTH_CARD,
              surface: qCards.surfaceCards,
              coords: {
                x: e.clientLeft,
                y: e.clientTop,
              },
            },
            surface
          );
          gsap.to(`#${e.id}`, {
            left: position.coords.x,

            top: position.coords.y,
            duration: 0.1,
          });
          gsap.to(`#${e.id}`, { opacity: 1, duration: 0.2 });
        }
      }
      !mounted && (mounted = true);
    }
  }, []);
  return (
    <div className={s.cards} ref={ref}>
      {!list.loading &&
        list.data.map((c, i) => (
          <C
            social={{ icon: <Dribbble />, provider: c.provider }}
            id={`${c.name}${i}`}
            key={i}
            user={{
              name: c.name,
              username: c.username,
              avatar: c.avatar,
            }}
          />
        ))}
    </div>
  );
};

const C: FC<{
  social?: { icon: ReactNode; provider: string };
  id: string;
  user: { name: string; username: string; avatar: string };
}> = ({ social, user, id }) => {
  return (
    <div className={s.c} id={id}>
      {social && (
        <div className={s.social}>
          <div className={s.icon}>{social.icon}</div>
          <span>{social.provider}</span>
        </div>
      )}
      <div className={s.info}>
        <Avatar size={36} alt="t" src={user.avatar} />
        <div className={s.user}>
          <h4>{user.name}</h4>
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

type A = {
  size?: number;
  src: string;
  alt: string;
};
const Avatar: FC<A> = ({ src, size = 36, alt }) => {
  return (
    <div className={s.avatar} style={{ width: size, height: size }}>
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Cards;
