import Header from "./layout/ProfileHeader";

function ProfilePage() {
  return (
    <div className=" flex-1 min-h-full flex flex-col">
      <Header />
    </div>
  );
}

export default ProfilePage;

{
  /* <div className="accordion divide-neutral/20 divide-y">
        <div className="accordion-item">
          <button
            className="accordion-toggle flex bg-base-200 my-4 rounded-full py-1 px-2 mx-auto w-fit  duration-300 transition-all hover:opacity-50 opacity-100 active:opacity-20"
            aria-controls="payment-arrow-collapse"
            aria-expanded="false"
          >
            <span className="text-sm font-normal">Подробнее</span>
          </button>
          <div
            id="payment-arrow-collapse"
            className="accordion-content w-full mt-1 p-2  overflow-hidden transition-[height] duration-300"
            aria-labelledby="payment-arrow"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Payment is taken during the checkout process when you pay for
                your order. The order number that appears on the confirmation
                screen indicates payment has been successfully processed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="tabs tabs-bordered"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className="tab active-tab:tab-active active gap-2 w-full"
          id="tabs-basic-filled-item-1"
          data-tab="#tabs-basic-filled-1"
          aria-controls="tabs-basic-filled-1"
          role="tab"
          aria-selected="true"
        >
          <Icon name="list" size="30" />
          Посты
        </button>
        <button
          type="button"
          className="tab active-tab:tab-active gap-2 w-full"
          id="tabs-basic-filled-item-2"
          data-tab="#tabs-basic-filled-2"
          aria-controls="tabs-basic-filled-2"
          role="tab"
          aria-selected="false"
        >
          <Icon name="image-circle" size="30" />
          Медиа
        </button>
        <button
          type="button"
          className="tab active-tab:tab-active gap-2 w-full"
          id="tabs-basic-filled-item-3"
          data-tab="#tabs-basic-filled-3"
          aria-controls="tabs-basic-filled-3"
          role="tab"
          aria-selected="false"
        >
          <Icon name="heart-circle" size="30" />
          Оценки
        </button>
      </nav>

      <div className="mt-3">
        <div
          id="tabs-basic-filled-1"
          role="tabpanel"
          aria-labelledby="tabs-basic-filled-item-1"
        >
          <p className="text-base-content/80">
            Welcome to the
            <span className="text-base-content font-semibold">Home tab!</span>
            Explore the latest updates and news here.
          </p>
        </div>
        <div
          id="tabs-basic-filled-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-basic-filled-item-2"
        >
          <p className="text-base-content/80">
            This is your
            <span className="text-base-content font-semibold">Profile</span>
            tab, where you can update your personal information and manage your
            account details.
          </p>
        </div>
        <div
          id="tabs-basic-filled-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-basic-filled-item-3"
        >
          <p class="text-base-content/80">
            <span class="text-base-content font-semibold">Messages:</span> View
            your recent messages, chat with friends, and manage your
            conversations.
          </p>
        </div>
      </div> */
}
