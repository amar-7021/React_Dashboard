import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const Dashboard = () => {
  let [isOpen, setIsOpen] = useState(false)

	return   <div className="tw:min-h-screen tw:bg-gray-100 tw:flex tw:items-center tw:justify-center">
	<section className="h-screen bg-red-500 flex items-center justify-center">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quos.</p>
  </section>
	<div class="tw-border tw-border-blue-300 tw-shadow tw-rounded-md tw-p-4 tw-max-w-sm tw-w-full tw-mx-auto">
  <div class="tw-animate-pulse tw-flex tw-space-x-4">
    <div class="tw-rounded-full tw-bg-slate-700 tw-h-10 tw-w-10"></div>
    <div class="tw-flex-1 tw-space-y-6 py-1">
      <div class="tw-h-2 tw-bg-slate-700 tw-rounded"></div>
      <div class="tw-space-y-3">
        <div class="tw-grid tw-grid-cols-3 tw-gap-4">
          <div class="tw-h-2 tw-bg-slate-700 tw-rounded tw-col-span-2"></div>
          <div class="tw-h-2 tw-bg-slate-700 tw-rounded tw-col-span-1"></div>
        </div>
        <div class="tw-h-2 tw-bg-slate-700 tw-rounded"></div>
      </div>
    </div>
  </div>
</div>

<button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="tw-relative tw-z-50">
        <div className="tw-fixed tw-inset-0 tw-flex tw-w-screen tw-items-center tw-justify-center tw-p-4">
          <DialogPanel className="tw-max-w-lg tw-space-y-4 tw-border tw-bg-white tw-p-12">
            <DialogTitle className="tw-font-bold">Deactivate account</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="tw-flex tw-gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
  </div>
};

export default Dashboard;
