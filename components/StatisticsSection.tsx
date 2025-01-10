export function StatisticsSection() {
  return (
    <section className="text-center py-8 px-4 bg-[#353434] text-white">
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <div>
          <h2 className="text-4xl font-bold">95%</h2>
          <p className="text-white">Customer satisfaction</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">+50k</h2>
          <p className="text-white">Campaigns managed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">4.8</h2>
          <p className="text-white">Platform rating</p>
        </div>
      </div>
    </section>
  );
}
